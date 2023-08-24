import { z } from "zod";

export type CreateDepartmentInput = z.infer<typeof createDepartmentSchema>;
export const createDepartmentSchema = z.object({
  department_name: z.string(),
  manager_id: z.number(),
  location_id:z.number(),
  country_id: z.number()
});

