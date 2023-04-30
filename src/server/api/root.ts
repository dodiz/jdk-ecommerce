import { createTRPCRouter } from "~server/api/trpc";
import { exampleRouter } from "~server/api/routers";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
