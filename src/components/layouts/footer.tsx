const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 border-t border-black bg-white px-4 py-10 text-xs font-medium leading-3 text-[#767676]">
      <div className="flex w-full max-w-screen-xl items-center justify-between">
        <div className="flex flex-wrap items-center justify-start gap-4">
          <button>Terms of Service</button>
          <button>Manage Cookies</button>
          <button>Privacy Policy</button>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-4">
          <button>Company</button>
          <button>Help</button>
          <button>Contact us</button>
        </div>
      </div>
      <div className="flex w-full max-w-screen-xl items-center justify-between py-3 sm:p-0">
        <p>©2025 bajji, Inc. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
