import React from "react";
import { Story } from "@/app/data/definitions";

type TopStoriesProps = {
  title: string;
  stories: Story[];
};

const TopStories: React.FunctionComponent<TopStoriesProps> = ({
  title,
  stories,
}) => {
  return (
    <section className="bg-gray-200 flex flex-col gap-4 rounded-md overflow-hidden">
      <h2 className="bg-gray-900 text-gray-200 px-4 py-2 font-bold">{title}</h2>
      <ul className="flex flex-col gap-2 text-gray-950 p-2">
        {stories.map((story) => (
          <li className="p-4 bg-gray-300 shadow-sm shadow-gray-700 flex flex-row justify-between">
            <div className="flex flex-col gap-4">
              <p className="font-medium">{story.title}</p>
              <div className="flex flex-row gap-2">
                {story.tags.map((tag) => (
                  <span className="bg-gray-700 text-gray-100 rounded-sm px-2 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="bg-gray-200 text-gray-700 rounded-sm px-1 py-1 text-xs text-right">
                {story.views}
              </span>
              <span className="bg-green-200 text-green-700 rounded-sm px-1 py-1 text-xs text-right">
                {story.upvotes}
              </span>
              <span className="bg-red-200 text-red-700 rounded-sm px-1 py-1 text-xs text-right">
                {story.downvotes}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopStories;
