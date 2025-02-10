import Link from "next/link";
import Header from "~/components/layouts/header";
import Footer from "~/components/layouts/footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-black">
      <Header />
      <div className="flex min-h-screen w-full max-w-screen-xl flex-col border-l border-r border-black">
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
        <div className="w-full px-6 pb-10">
          <div className="flex flex-col items-start justify-start gap-4 border-b border-black py-10">
            <p className="text-sm font-medium">Story</p>
            <p className="text-5xl font-semibold leading-[52px]">
              FDA urges patch of Illumina devices with three critical flaws
              ranked 10 in severity (scmagazine.com)
            </p>
            <p className="text-xs font-medium text-[#767676]">
              by LinuxBender 12 minutes ago
            </p>
          </div>
          <div className="flex w-full justify-start gap-12 py-10">
            <div className="flex w-full flex-wrap gap-6">
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>

              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
              <div className="flex h-[122px] w-[272px] flex-col gap-2 border-b border-dashed pb-6">
                <p className="text-sm font-medium leading-[14px]">Story</p>
                <p className="text-lg font-semibold leading-5">
                  {`Vectorized and performance-portable Quicksort (googleblog.com)`}
                </p>
                <p className="text-xs font-medium leading-3 text-[#767676]">{`by slackerIII 22 hours ago`}</p>
              </div>
            </div>
            <div className="w-[320px]">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
