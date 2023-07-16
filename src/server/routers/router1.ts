import { router, procedure } from "../trpc";
import { z } from "zod";
export const router1 = router({
  get1: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;
      return { name: input.text };
    }),
  post1: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return { status: input.text };
    }),
});
