"use client";

import { useState, useEffect } from "react";
import { fetchStories } from "../../lib/hackernews";
import { formatDistanceToNow } from "date-fns";
import { HNStory, StoryTypes } from "~/consts/stories";
import StoryComponent from "../story/story";

const TopStoriesComponent = () => {
  const [topStories, setTopStories] = useState<HNStory[]>([]);
  const [newStories, setNewStories] = useState<HNStory[]>([]);
  const [bestStory, setTopStory] = useState<HNStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const topStoriesData = await fetchStories(18, StoryTypes.top);
        const newStoriesData = await fetchStories(5, StoryTypes.new);
        const bestStoryData = await fetchStories(1, StoryTypes.best);
        setTopStories(topStoriesData);
        setNewStories(newStoriesData);
        setTopStory(bestStoryData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load stories");
      } finally {
        setLoading(false);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadStories();
  }, []);

  if (loading)
    return <div className="p-4 text-gray-500">Loading HN stories...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  return (
    <div className="w-full px-6 pb-10">
      {topStories.length > 0 ? (
        <>
          <div className="flex flex-col items-start justify-start gap-4 border-b border-black py-10">
            <p className="text-sm font-medium">Story</p>
            <p className="text-5xl font-semibold leading-[52px]">
              {bestStory[0]?.title}
            </p>
            <p className="text-xs font-medium text-[#767676]">
              {`by ${bestStory[0]?.by} ${bestStory[0] && formatDistanceToNow(new Date(bestStory[0]?.time * 1000))} ago`}
            </p>
          </div>
          <div className="flex w-full justify-start gap-12 py-10">
            <div className="flex w-full flex-wrap gap-6">
              {topStories.map((story) => (
                <>
                  <StoryComponent
                    id={story.id}
                    title={story.title}
                    by={story.by}
                    time={story.time}
                  />
                </>
              ))}
            </div>
            <div className="flex w-80 flex-col items-start justify-start">
              <p className="w-full border-b border-t border-black py-4 text-2xl font-bold leading-6">
                The Latest
              </p>
              {newStories.map((story) => (
                <>
                  <div className="pt-6">
                    <StoryComponent
                      id={story.id}
                      title={story.title}
                      by={story.by}
                      time={story.time}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>No exist</p>
      )}
    </div>
  );
};

export default TopStoriesComponent;
