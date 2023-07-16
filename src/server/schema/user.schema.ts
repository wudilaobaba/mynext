import { z } from "zod";

export type CreateUser = z.infer<typeof createUserSchema>;
export const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type GetUser = z.infer<typeof getUserSchema>;
export const getUserSchema = z.object({
  name: z.string(),
  password: z.string(),
});

export type GetUserInfinite = z.infer<typeof getUserInfiniteSchema>;
export const getUserInfiniteSchema = z.object({
  limit: z.number().min(0).max(200).default(10),
  cursor: z.number().optional(),
  xx: z.number().max(3),
});

export type DeleteUser = z.infer<typeof deleteUserSchema>;
export const deleteUserSchema = z.object({
  id: z.number(),
});
