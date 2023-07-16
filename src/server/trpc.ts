import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "@/server/createContext";
const t = initTRPC.context<Context>().create();
const { router, procedure } = t;
const isAdminMiddleware = t.middleware(({ ctx, input, next }) => {
  if (ctx.age === 12) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "不能是12岁",
    });
  }
  return next({ ctx: { age: 23000, aa: 2 } });
});
export { router, procedure };

export const adminProducer = procedure.use(isAdminMiddleware);
