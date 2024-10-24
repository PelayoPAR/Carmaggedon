import { postRouter } from "~/server/api/routers/post";
import { topicRouter } from "~/server/api/routers/topic";
import { noteRouter } from "~/server/api/routers/note";
import { offerRouter } from "~/server/api/routers/offer";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  topic: topicRouter,
  note: noteRouter,
  offer: offerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
