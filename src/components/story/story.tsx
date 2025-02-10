import { formatDistanceToNow } from "date-fns";

const StoryComponent = ({
  id,
  title,
  by,
  time,
}: {
  id: number;
  title: string;
  by: string;
  time: number;
}) => {
  return (
    <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed border-black pb-4 sm:pb-6">
      <p className="text-sm font-medium leading-[14px]">Story</p>
      <a
        href={`https://news.ycombinator.com/item?id=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="h-20 text-lg font-semibold leading-5"
      >
        {title}
      </a>
      <p className="text-xs font-medium leading-3 text-[#767676]">{`by ${by} ${formatDistanceToNow(new Date(time * 1000))} ago`}</p>
    </div>
  );
};

export default StoryComponent;
