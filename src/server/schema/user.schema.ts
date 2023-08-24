import { z } from "zod";

export type CreateUserInput = z.infer<typeof createUserSchema>;
export const createUserSchema = z.object({
  name: z.string(),
  wechat: z.string(),
  hobby: z.string().optional(),
});
export type CreateManyUserInput = z.infer<typeof createManyUserSchema>;
export const createManyUserSchema = z.array(z.object({
  name: z.string(),
  wechat: z.string(),
  hobby: z.string().optional(),
}))

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export const updateUserSchema = z.object({
  id: z.number(),
  facebook: z.string().optional(),
  age: z.number().optional(),
  hobby: z.string().optional(),
})

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

