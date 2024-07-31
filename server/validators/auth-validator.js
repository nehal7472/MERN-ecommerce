const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be at lest of 3 chars" })
    .max(255, { message: "email must be at lest of 255 chars" }),

  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "password must be at lest of 6 chars" })
    .max(1024, { message: "password must be at lest of 1024 chars" }),
});

// Creating an object Schema

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "name must be at lest of 3 chars" })
    .max(255, { message: "name must be at lest of 255 chars" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(11, { message: "phone must be at lest of 11 chars" })
    .max(11, { message: "phone must be at lest of 11 chars" }),
});

module.exports = { signupSchema, loginSchema };


