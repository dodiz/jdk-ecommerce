import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~server/api/trpc";

export const brandRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.brand.findMany();
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input: data }) => {
      return ctx.prisma.brand.create({
        data,
      });
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { id } }) => {
      return ctx.prisma.category.delete({
        where: {
          id,
        },
      });
    }),
});
