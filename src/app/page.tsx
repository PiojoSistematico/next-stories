import Image from "next/image";

import NewStories from "@/components/NewStories";

import TopViewsStories from "@/components/TopViewsStories";
import TopRatedStories from "@/components/TopRatedStories";

export default async function Home() {
  return (
    <main className="bg-blue-50 p-4 flex flex-col gap-4">
      <h1 className="text-blue-900 font-bold text-xl">Home</h1>

      <NewStories></NewStories>

      <TopViewsStories></TopViewsStories>

      <TopRatedStories></TopRatedStories>
    </main>
  );
}
