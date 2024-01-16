import Image from "next/image";
import Profile from "./components/Profile";
import Links from "./components/Links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 backdrop-blur-md">
      <div>
        <Profile />
      </div>
      <div className=" my-12 lg:my-0">
        <Links />
      </div>
      <div className="w-full mt-8">
        <p className="text-xs text-center">
          Copyright © 2024 - All right reserved by Boluwatife Emmanuel
        </p>
      </div>
    </main>
  );
}
