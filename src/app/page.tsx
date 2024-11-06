import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Head from "next/head";
import React from "react";
import CarList from "~/components/CarList";
import { db } from "~/server/db";
const offerList = await db.offer.findMany()

export default async function Home() {

  return (
    <HydrateClient>
      <Head>
        <title>CarApp</title>
        <meta name="description" content="Car App" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">

        <CarList offerList={offerList} />
      </main>
    </HydrateClient>
  );
}
