import { router, procedure } from "@/server/trpc";
import { createUserSchema, createManyUserSchema, updateUserSchema } from "@/server/schema/user.schema";
import { createUserHandler, createManyUsersHandler, updateUserController } from "@/server/controllers/user";

export const userRouter = router({
  create: procedure
    .input(createUserSchema)
    .mutation(createUserHandler),
  createMany: procedure
    .input(createManyUserSchema)
    .mutation(createManyUsersHandler),
  update: procedure
    .input(updateUserSchema)
    .mutation(updateUserController),
});
