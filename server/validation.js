import Joi from "joi";

const exampleDomains = ["example.com", "example.net", "example.org"];

export const emailValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .trim()
            .email()
            .custom((email, helpers) => {
                const domain = email.slice(email.lastIndexOf("@") + 1).toLowerCase();

                if (exampleDomains.some((example) => domain === example || domain.endsWith(`.${example}`))) {
                    return helpers.error("email.placeholder");
                }

                return email;
            })
            .required()
            .messages({
                "string.empty": "Email cannot be empty.",
                "string.email": "Please enter a valid email address.",
                "email.placeholder": "Please use your email address instead of an example address.",
                "any.required": "Email is required.",
            }),
        subject: Joi.string().min(2).max(50).required()
            .messages({
                "string.empty": "Subject cannot be empty.",
                "string.min": "Subject must be at least 2 characters long.",
                "string.max": "Subject must not exceed 50 characters.",
                "any.required": "Subject is required.",
            }),
        message: Joi.string().min(2).max(250).required()
            .messages({
                "string.empty": "Message cannot be empty.",
                "string.min": "Message must be at least 2 characters long.",
                "string.max": "Message must not exceed 250 characters.",
                "any.required": "Message is required.",
            }),
    }).required();

    return schema.validate(data);
};

export const verifyContactEmail = async (email) => {
    try {
        const apiKey = process.env.HUNTER_API_KEY;
        if (!apiKey) return "unavailable";

        const url = new URL(process.env.HUNTER_BASE_URL);
        url.searchParams.set("email", email);
        url.searchParams.set("api_key", apiKey);

        const response = await fetch(url, { signal: AbortSignal.timeout(22000) });
        if (response.status !== 200) {
            console.error("Hunter email verification returned HTTP", response.status);
            return "unavailable";
        }

        const { data } = await response.json();
        if (data?.status === "disposable" || data?.disposable === true) return "disposable";
        if (data?.status === "invalid") return "invalid";
        if (["valid", "webmail", "accept_all", "unknown"].includes(data?.status)) return "accepted";
        return "unavailable";
    } catch {
        console.error("Hunter email verification request failed.");
        return "unavailable";
    }
};
