import {router, procedure} from "@/server/trpc";
import {createManyEmpSchema, findEmpSchema, createEmpSchema, empInfiniteSchema} from "@/server/schema/employee.schema";
import {createManyEmpController, getEmpController, createEmpController,empListController, empListInfiniteController} from "@/server/controllers/employee";

export const empRouter = router({
  create: procedure
    .input(createEmpSchema)
    .mutation(createEmpController),
  createMany: procedure
    .input(createManyEmpSchema)
    .mutation(createManyEmpController),
  get: procedure
    .input(findEmpSchema)
    .mutation(getEmpController),
  getById: procedure
    .input(findEmpSchema)
    .query(getEmpController),
  empList: procedure.query(empListController),
  empListInfinite: procedure.input(empInfiniteSchema).query(empListInfiniteController)
});
