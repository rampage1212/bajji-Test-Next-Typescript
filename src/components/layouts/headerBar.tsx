const HeaderBar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-6">
        <p className="text-[32px] font-semibold leading-8">Hacker News</p>
        <div className="flex items-center justify-end gap-2">
          <button>Subscribe</button>
          <button></button>
        </div>
      </div>
      <div className="flex h-10 items-center justify-start border-b border-t border-black text-sm font-medium">
        <button className="h-full bg-black px-6 text-white">Top</button>
        <button className="h-full px-6 text-black">Ask</button>
        <button className="h-full px-6 text-black">Show</button>
        <button className="h-full px-6 text-black">Jobs</button>
      </div>
    </>
  );
};

export default HeaderBar;
