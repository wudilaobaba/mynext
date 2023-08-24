import {router, procedure} from "@/server/trpc";
import {createDepartmentSchema} from "@/server/schema/department.schema";
import {createDepartmentController, departmentListController} from "@/server/controllers/department";

export const departmentRouter = router({
  create: procedure
    .input(createDepartmentSchema)
    .mutation(createDepartmentController),
  list:procedure.query(departmentListController)
});
