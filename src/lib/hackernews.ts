import axios from "axios";
import { HNStory, StoryTypes } from "~/consts/stories";

const hnClient = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
  timeout: 5000,
});

export const fetchStories = async (
  limit = 10,
  type: StoryTypes,
): Promise<HNStory[]> => {
  try {
    // Get top story IDs
    const { data: storyIds } = await hnClient.get<number[]>(
      `/${type}stories.json`,
    );

    // Fetch details for first N stories
    const topStoryIds = storyIds.slice(0, limit);
    const storyPromises = topStoryIds.map((id) =>
      hnClient.get<HNStory>(`/item/${id}.json`),
    );

    // Resolve all promises and filter valid stories
    const stories = await Promise.all(storyPromises);
    return stories
      .map((res) => res.data)
      .filter((story) => story.type === "story");
  } catch (error) {
    console.error("Failed to fetch HN stories:", error);
    throw new Error("Failed to fetch Hacker News stories");
  }
};
