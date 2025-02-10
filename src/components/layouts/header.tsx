const Header = () => {
  return (
    <div className="flex w-full items-center justify-center bg-black py-2 text-white">
      <div className="flex w-full max-w-screen-xl items-center justify-start gap-2 text-xs font-semibold">
        <p className="">Frontend Coding Challenge by bajji, Inc.</p>
        <p className="border-l border-white px-2 text-[#FFA028]">
          Enter Your Name
        </p>
        <p className="border-l border-white px-2">
          Enter Your Implementation Time
        </p>
      </div>
    </div>
  );
};

export default Header;
