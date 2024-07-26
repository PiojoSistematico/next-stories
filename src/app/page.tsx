import Image from "next/image";
import { Suspense } from "react";

import NewStories from "@/components/NewStories";

import TopViewsStories from "@/components/TopViewsStories";
import TopRatedStories from "@/components/TopRatedStories";
import { TopStoriesSkeleton } from "@/components/ui/skeletons";

export default async function Home() {
  return (
    <main className="bg-gray-50 p-4 flex flex-col gap-4">
      <h1 className="text-gray-900 font-bold text-xl">Home</h1>

      <Suspense fallback={<TopStoriesSkeleton></TopStoriesSkeleton>}>
        <NewStories></NewStories>
      </Suspense>

      <Suspense fallback={<TopStoriesSkeleton></TopStoriesSkeleton>}>
        <TopViewsStories></TopViewsStories>
      </Suspense>

      <Suspense fallback={<TopStoriesSkeleton></TopStoriesSkeleton>}>
        <TopRatedStories></TopRatedStories>
      </Suspense>
    </main>
  );
}
