import { fetchNewStories } from "@/app/data/fetch";
import TopStories from "./ui/TopStories";

const NewStories: React.FunctionComponent = async () => {
  const newStories = await fetchNewStories();
  return <TopStories title={"New Stories"} stories={newStories}></TopStories>;
};

export default NewStories;
