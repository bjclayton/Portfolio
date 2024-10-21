import Joi from "joi";
import 'dotenv/config.js';

export const emailValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        subject: Joi.string().min(2).max(50).required(),
        message: Joi.string().min(2).max(250).required(),
    });

    return schema.validate(data);
}

export const isNotValidEmail = async (email) => {
    try {
        const response = await fetch(`${process.env.HUNTER_BASE_URL}=${email}&api_key=${process.env.HUNTER_API_KEY}`)

        if (!response.ok) {
            console.error("Error validating email:");
            return true;
        }

        const responseData = await response.json()
        return responseData.data.status === "invalid"
    } catch (error) {
        console.error("Error validating email:", error);
        return true;
    }
}