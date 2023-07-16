import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "@/server/routers";
import { createContext } from "@/server";
/***
 * 客户端每请求一次，都会执行一次该 createContext方法！！！！！！！！！！！！！！！！
 * @param req createContext的请求参数
 * @param res createContext的响应参数
 */

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
