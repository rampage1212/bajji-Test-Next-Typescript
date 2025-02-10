import Link from "next/link";
import Header from "~/components/layouts/header";
import Footer from "~/components/layouts/footer";
import ShowPage from "./show/page";
import AskPage from "./ask/page";
import JobsPage from "./jobs/page";
import TopStoriesComponent from "~/components/stories/topStories";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-black">
      <TopStoriesComponent />
      {/* <AskPage />
      <ShowPage />
      <JobsPage /> */}
    </main>
  );
}
