import { fetchTopViewsStories } from "@/app/data/fetch";
import TopStories from "./ui/TopStories";

const TopViewsStories: React.FunctionComponent = async () => {
  const topOfTheMonthStories = await fetchTopViewsStories();
  return (
    <TopStories
      title={"Most Views"}
      stories={topOfTheMonthStories}
    ></TopStories>
  );
};

export default TopViewsStories;
