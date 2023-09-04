import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~server/api/trpc";
import { Gender } from "@prisma/client";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        gender: z.nativeEnum(Gender),
      })
    )
    .mutation(async ({ ctx, input: data }) => {
      return ctx.prisma.category.create({
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
