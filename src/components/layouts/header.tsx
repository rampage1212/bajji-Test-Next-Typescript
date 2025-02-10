import { AccessTime, Person } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-center bg-black py-2 text-white">
      <div className="flex w-full max-w-screen-xl items-center justify-center gap-2 text-xs font-semibold sm:justify-start">
        <p className="text-[#F3F4EF]">
          Frontend Coding Challenge by bajji, Inc.
        </p>
        <div className="flex items-center justify-start gap-2 border-l border-white px-2">
          <Person />
          <p className="hidden text-[#FFA028] sm:flex">Enter Your Name</p>
        </div>
        <div className="flex items-center justify-start gap-2 border-l border-white px-2">
          <AccessTime />
          <p className="hidden text-[#B3B3B3] sm:flex">
            Enter Your Implementation Time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
