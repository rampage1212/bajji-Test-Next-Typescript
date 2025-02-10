"use client";

import { useState, useEffect } from "react";
import { fetchStories } from "../../lib/hackernews";
import { formatDistanceToNow } from "date-fns";
import { HNStory, StoryTypes } from "~/consts/stories";
import StoryComponent from "~/components/story/story";

const AskStoriesComponent = () => {
  const [stories, setStories] = useState<HNStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const data = await fetchStories(16, StoryTypes.ask);
        setStories(data);
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
    <div className="w-full px-4 pb-10 sm:px-6">
      <p className="pt-4 text-3xl font-bold leading-9 sm:pt-10 sm:text-5xl sm:leading-[52px]">
        Ask HN
      </p>
      {stories.length > 0 ? (
        <>
          <div className="flex flex-col items-start justify-start gap-4 border-b border-black py-4 sm:py-10">
            <p className="text-sm font-medium">Story</p>
            <p className="text-3xl font-semibold leading-9 sm:text-5xl sm:leading-[52px]">
              {stories[0]?.title}
            </p>
            <p className="text-xs font-medium text-[#767676]">
              {`by ${stories[0]?.by} ${stories[0] && formatDistanceToNow(new Date(stories[0]?.time * 1000))} ago`}
            </p>
          </div>
          <div className="flex w-full justify-start gap-12 py-10">
            <div className="flex w-full flex-wrap gap-6">
              {stories.map((story) => (
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
          </div>
        </>
      ) : (
        <p>No exist</p>
      )}
    </div>
  );
};

export default AskStoriesComponent;
