const { z } = require("zod");

// Creating an object Schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { msg: "name must be at lest of 3 chars" })
    .max(255, { msg: "name must be at lest of 255 chars" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ msg: "Invalid email address" })
    .min(3, { msg: "email must be at lest of 3 chars" })
    .max(255, { msg: "email must be at lest of 255 chars" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(3, { msg: "phone must be at lest of 3 chars" })
    .max(255, { msg: "phone must be at lest of 255 chars" }),
  password: z
    .string({ required_error: "password is required" })
    .min(6, { msg: "password must be at lest of 6 chars" })
    .max(1024, { msg: "password must be at lest of 1024 chars" }),
});

module.exports = signupSchema;
