import { router, procedure, adminProducer } from "@/server/trpc";
import { prisma } from "@/server/prisma";
import {
  createUserSchema,
  getUserSchema,
  getUserInfiniteSchema,
  deleteUserSchema,
} from "@/server/schema/user.schema";
import {
  createUserController,
  getUserController,
  getUserInfiniteController,
  deleteUserController,
} from "@/server/controllers/memner.controller";

export const memberRouter = router({
  list: procedure.query(async () => {
    const data = await prisma.user.findMany();
    return [...data];
  }),
  create: procedure.input(createUserSchema).mutation(createUserController),
  xxx: adminProducer.query(async ({ ctx }) => {
    return { age: ctx.age, aa: ctx.aa };
  }),
  user: procedure.input(getUserSchema).query(getUserController),
  userInfinite: procedure
    .input(getUserInfiniteSchema)
    .query(getUserInfiniteController),

  deleteUser: procedure.input(deleteUserSchema).mutation(deleteUserController),
});
