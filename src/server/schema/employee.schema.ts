import { z } from "zod";

export type CreateManyEmpInput = z.infer<typeof createManyEmpSchema>;
export const createManyEmpSchema = z.array(z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().optional(),
  phone_number: z.string().optional(),
  salary: z.number(),
  manager_id: z.number(),
  department_id: z.number(),
  commission_pct: z.string(),
}));

export type CreateEmpInput = z.infer<typeof createEmpSchema>;
export const createEmpSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().optional(),
  phone_number: z.string().optional(),
  salary: z.number(),
  manager_id: z.number(),
  department_id: z.number(),
  commission_pct: z.string(),
})

export type FindEmpInput = z.infer<typeof findEmpSchema>;
export const findEmpSchema = z.object({
  id: z.number(),
})

export type EmpInfiniteInput = z.infer<typeof empInfiniteSchema>;
export const empInfiniteSchema = z.object({
  limit: z.number(),
  cursor: z.number().optional()
})
