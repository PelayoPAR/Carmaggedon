import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const offerRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => { 
        return ctx.db.note.findMany()
    }),
    create: protectedProcedure
    .input(z.object(
        {
            price: z.number().nonnegative(),
            description: z.string(),
            // images: z.string().array(),
            // fuel: z.string(),
            // year: z.number(),
            // make: z.string(),
            // model: z.string(),
            // cc: z.number(),
            // power: z.number(),
            // gearbox: z.string(),
            // transmission: z.string(),
            // color: z.string(),
            // bodyType: z.string(),
            // mileage: z.number(),
            // doors: z.number(),
            // emissionsLabel: z.string(),
            // seats: z.number(),
        }
    ))
    .mutation(({ctx, input}) => {
    return ctx.db.offer.create({
        data: {
            ...input,
            userId: ctx.session.user.id,
        }
    })
})
});
