import { createTRPCRouter } from "~server/api/trpc";
import { sizeRouter } from "~server/api/routers";

export const appRouter = createTRPCRouter({
  size: sizeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
