import Image from "next/image";
import Profile from "./components/Profile";
import Links from "./components/Links";
import BlogLink from "./components/BlogLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 backdrop-blur-md">
      <div>
        <Profile />
      </div>
      <div className=" my-12 lg:my-0 lg:mt-8">
        <Links />
      </div>
      <div className=" my-5 lg:my-0 lg:mt-8">
        <BlogLink />
      </div>
      <div className="w-full mt-8">
        <p className="text-xs text-center">
          Copyright © 2024 - All right reserved by Boluwatife Emmanuel
        </p>
      </div>
    </main>
  );
}
