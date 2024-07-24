import Image from "next/image";
import { fetchTags } from "../data/fetch";
import { Tag } from "../data/definitions";

export default async function Tags() {
  const tags: Tag[] = await fetchTags();

  return (
    <main className="bg-gray-50 p-4 flex flex-col gap-4">
      <h1 className="text-gray-900 font-bold text-xl">
        Search stories by their tag!
      </h1>
      <ul className="flex flex-row gap-2 flex-wrap">
        {tags.map((elem) => (
          <li
            className="bg-gray-700 text-gray-100 rounded-sm px-2 py-1 text-sm"
            key={elem.tag}
          >
            {elem.tag}
          </li>
        ))}
      </ul>
    </main>
  );
}
