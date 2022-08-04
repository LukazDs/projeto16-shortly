import joi from "joi";

const customerSchema = joi.object({
    name: joi.string().trim().required(),
    email: joi.string().email().trim().required(),
    password: joi.string().trim().required(),
    confirmPassword: joi.string().trim().required()
})

export { customerSchema };