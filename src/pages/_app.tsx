import type { AppType } from "next/app";
import { trpc } from "@/utils";
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default trpc.withTRPC(MyApp);
