import type {
  CreateUser,
  GetUser,
  GetUserInfinite,
  DeleteUser,
} from "@/server/schema/user.schema";
import { prisma } from "@/server";
import type { Context } from "@/server/createContext";
export const createUserController = async ({
  input,
  ctx,
}: {
  input: CreateUser;
  ctx: Context;
}) => {
  // 客户端每请求一次，都会执行一次createContext方法！！！！！！！！！！！！！！！！
  console.log("===>", ctx); // ctx就是trpc中的createContext方法
  await prisma.user.create({ data: input });
  return { status: "okok~~" };
};

export const getUserController = async ({
  input,
  ctx,
}: {
  input: GetUser;
  ctx: Context;
}) => {
  const data = await prisma.user.findMany({
    where: {
      name: input.name,
      password: input.password,
    },
    select: {
      name: true,
      password: true,
    },
  });
  return data;
};

export const getUserInfiniteController = async ({
  input,
  ctx,
}: {
  input: GetUserInfinite;
  ctx: Context;
}) => {
  const { limit, cursor = 1 } = input;
  const data = await prisma.user.findMany({
    select: {
      name: true,
    },
    take: limit + 1,
    skip: (cursor - 1) * limit,
  });
  let nextCursor;
  if (data.length > limit) {
    data.pop();
    nextCursor = cursor + 1;
  }
  return {
    // @ts-ignore
    data: [...new Set(data.map((item) => item).flat())],
    nextCursor,
  };
};

export const deleteUserController = async ({
  input,
  ctx,
}: {
  input: DeleteUser;
  ctx: Context;
}) => {
  const { id } = input;
  await prisma.user.delete({
    where: { id },
  });
  return "ok";
};
