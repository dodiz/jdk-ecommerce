import { createTRPCRouter, publicProcedure } from "~server/api/trpc";

export const sizeRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.size.findMany();
  }),
});
