import { createTRPCRouter } from "~server/api/trpc";
import { brandRouter, categoryRouter } from "~server/api/routers";

export const appRouter = createTRPCRouter({
  category: categoryRouter,
  brand: brandRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
