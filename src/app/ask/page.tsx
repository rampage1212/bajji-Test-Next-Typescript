"use client";

import { useState, useEffect } from "react";
import { fetchStories } from "../../lib/hackernews";
import { formatDistanceToNow } from "date-fns";
import { HNStory, StoryTypes } from "~/consts/stories";

const AskPage = () => {
  const [stories, setStories] = useState<HNStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const data = await fetchStories(16, StoryTypes.ask);
        console.log(data);
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
        {/* <div className="w-[320px]">
          <p className="border-b border-t border-black py-4 text-2xl font-bold">
            The Latest
          </p>
          <div className="flex flex-col justify-start gap-2 border-b border-dashed border-black py-6">
            <p className="text-sm font-medium leading-[14px]">Story</p>
            <p className="text-lg font-semibold leading-5">
              {`IBM Releases Fully Homomorphic Encryption Toolkit for macOS
                  and iOS (2020) (ibm.com)`}
            </p>
            <p className="text-xs font-medium leading-3 text-[#767676]">
              {`by ddtaylor 0 minutes ago`}
            </p>
          </div>

          <div className="flex flex-col justify-start gap-2 border-b border-dashed border-black py-6">
            <p className="text-sm font-medium leading-[14px]">Ask</p>
            <p className="text-lg font-semibold leading-5">
              {`What's your strategy for reading dense books with too much
                  information?`}
            </p>
            <p className="text-xs font-medium leading-3 text-[#767676]">
              {`by aerovistae 2 minutes ago`}
            </p>
          </div>

          <div className="flex flex-col justify-start gap-2 border-b border-dashed border-black py-6">
            <p className="text-sm font-medium leading-[14px]">Story</p>
            <p className="text-lg font-semibold leading-5">
              {`Inspired by “The Book of Why” Microsoft open-sourced a library called DoWhy (microsoft.com)`}
            </p>
            <p className="text-xs font-medium leading-3 text-[#767676]">
              {`by RafelMri 3 minutes ago`}
            </p>
          </div>

          <div className="flex flex-col justify-start gap-2 border-b border-dashed border-black py-6">
            <p className="text-sm font-medium leading-[14px]">Story</p>
            <p className="text-lg font-semibold leading-5">
              {`Did you know you can post to Hacker News from Emacs with eww?`}
            </p>
            <p className="text-xs font-medium leading-3 text-[#767676]">
              {`by midislack 4 minutes ago`}
            </p>
          </div>

          <div className="flex flex-col justify-start gap-2 border-b border-dashed border-black py-6">
            <p className="text-sm font-medium leading-[14px]">Story</p>
            <p className="text-lg font-semibold leading-5">
              {`Orange Pi 800 Keyboard PC – A Raspberry Pi 400 alternative powered by RK3399 (cnx-software.com)`}
            </p>
            <p className="text-xs font-medium leading-3 text-[#767676]">
              {`by zdw 6 minutes ago`}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AskPage;
