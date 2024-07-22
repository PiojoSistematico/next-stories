import { fetchTopRatedStories } from "@/app/data/fetch";
import TopStories from "./ui/TopStories";

const TopRatedStories: React.FunctionComponent = async () => {
  const topRatedStories = await fetchTopRatedStories();
  return (
    <TopStories
      title={"Top Rated Stories"}
      stories={topRatedStories}
    ></TopStories>
  );
};

export default TopRatedStories;
