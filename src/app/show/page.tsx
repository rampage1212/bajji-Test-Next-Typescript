"use client";

import { useState, useEffect } from "react";
import { fetchStories } from "../../lib/hackernews";
import { formatDistanceToNow } from "date-fns";
import { HNStory, StoryTypes } from "~/consts/stories";

const ShowPage = () => {
  const [stories, setStories] = useState<HNStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const data = await fetchStories(16, StoryTypes.show);
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
    <div className="w-full px-6 pb-10">
      <p className="pt-10 text-5xl font-bold leading-[52px]">Show HN</p>
      {stories.length > 0 ? (
        <>
          <div className="flex flex-col items-start justify-start gap-4 border-b border-black py-10">
            <p className="text-sm font-medium">Story</p>
            <p className="text-5xl font-semibold leading-[52px]">
              {stories[0]?.title}
            </p>
            <p className="text-xs font-medium text-[#767676]">
              {`by ${stories[0]?.by} ${stories[0] && formatDistanceToNow(new Date(stories[0]?.time * 1000))} ago`}
            </p>
          </div>
          <div className="flex w-full justify-start gap-12 py-10">
            <div className="flex w-full flex-wrap gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed border-black pb-6"
                >
                  <p className="text-sm font-medium leading-[14px]">Story</p>
                  <a
                    href={`https://news.ycombinator.com/item?id=${story.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold leading-5"
                  >
                    {story.title}
                  </a>
                  <p className="text-xs font-medium leading-3 text-[#767676]">{`by ${story.by} ${formatDistanceToNow(new Date(story.time * 1000))} ago`}</p>
                </div>
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

export default ShowPage;
