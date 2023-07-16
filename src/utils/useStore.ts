import { Context as trpcContext } from "../components/context/trpcContextContainer";

import { useContext } from "react";

export const useStore = () => {
  const trpc = useContext(trpcContext);
  return {
    trpc,
  };
};
