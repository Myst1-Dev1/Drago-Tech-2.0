import { z } from "zod";

export const validateSignUp = z.object({
  email: z
    .email("Formato de email inválido")
    .min(1, "Email é obrigatório"),

  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres"),

  name: z
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres"),

  phone: z
    .string()
    .min(8, "O telefone deve ter no mínimo 8 dígitos")
    .max(20, "O telefone deve ter no máximo 20 dígitos")
    .regex(
        /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
        "Formato de telefone inválido (ex: (21) 99895-6202)"
  ),

  address: z
    .string()
    .min(5, "O endereço deve ter no mínimo 5 caracteres"),

  state: z
    .string()
    .min(2, "O estado deve ter no mínimo 2 caracteres"),

  city: z
    .string()
    .min(2, "A cidade deve ter no mínimo 2 caracteres"),

  zipCode: z
    .string()
    .regex(/^\d{5}-?\d{3}$/, "CEP inválido. Use o formato 12345-678"),
});

export const validateSignIn = z.object({
  email: z
    .email("Formato de email inválido")
    .min(1, "Email é obrigatório"),

  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres"),
})