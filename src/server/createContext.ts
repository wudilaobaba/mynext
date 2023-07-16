import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line no-unused-vars
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  // eslint-disable-next-line no-unused-vars
  ...args: any
) => Promise<infer R>
  ? R
  : any;
export const createContext = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  console.log(111);
  const a = 1;
  console.log(a + a === 3 ? { req, res } : null);
  // const session = await getServerAuthSession({ req, res });
  // // const acceptableOrigin = origins.some((o) => req.headers.referer?.startsWith(o)) ?? false;
  // const browsingMode = parseBrowsingMode(req.cookies, session);

  // return {
  //   user: session?.user,
  //   browsingMode,
  //   acceptableOrigin: true,
  // };
  return {
    name: "WHJ",
    age: 123,
    sex: "满",
  };
};

export type Context = AsyncReturnType<typeof createContext>;
