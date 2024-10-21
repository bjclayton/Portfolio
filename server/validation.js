import Joi from "joi";
import 'dotenv/config.js';

export const emailValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required()
            .messages({
                'string.empty': 'Email cannot be empty.',
                'string.email': 'Please enter a valid email address.',
                'any.required': 'Email is required.'
            }),
        subject: Joi.string().min(2).max(50).required()
            .messages({
                'string.empty': 'Subject cannot be empty.',
                'string.min': 'Subject must be at least 2 characters long.',
                'string.max': 'Subject must not exceed 50 characters.',
                'any.required': 'Subject is required.'
            }),
        message: Joi.string().min(2).max(250).required()
            .messages({
                'string.empty': 'Message cannot be empty.',
                'string.min': 'Message must be at least 2 characters long.',
                'string.max': 'Message must not exceed 250 characters.',
                'any.required': 'Message is required.'
            }),
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