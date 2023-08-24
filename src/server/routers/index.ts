import { router, procedure } from "../trpc";
import { router1 } from "./router1";
import {userRouter} from "@/server/routers/user.router";
import {empRouter} from "@/server/routers/emp.router";
import {departmentRouter} from "@/server/routers/department.router";
import {locationRouter} from "@/server/routers/location.router";
export const appRouter = router({
  router1,
  userRouter,
  empRouter,
  departmentRouter,
  locationRouter,
  // 以下作为学习使用
  sayHi: procedure.query(async (a) => {
    console.log("a:", a);
    return { name: "Mike" };
  }),
  logToServer: procedure
    .input((v) => {
      console.log("v:", v);
      // if (typeof v === "number") {
      //   throw new Error("WWWWWWOO");
      // }
      // 返回的值在mutation的回调参数中的input中
      return "ok";
    })
    .mutation(async (req) => {
      const { input } = req;
      console.log("===>", input);
      return true;
    }),
});
export type AppRouter = typeof appRouter;
