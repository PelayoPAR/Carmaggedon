import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Head from "next/head";
import { Header } from "~/components/Header";
import { AdminContent } from "~/components/AdminContent";
import React from "react";

export default async function Home() {
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <Head>
        <title>CarApp</title>
        <meta name="description" content="Car App" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <h3>Reading Cars...</h3>
      </main>
    </HydrateClient>
  );
}
