import { Hello } from "@/components/Hello";
import { Suspense } from "react";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen px-4 sm:px-10">
        <Hello/>

        <div className="text-sm text-opacity-70">
          <span>working on things on the side has never been my thing, </span>
          <span> but here are some side <span className="text-base font-extrabold">projects</span> i&apos;ve done in the past</span>
        </div>
    </main>
  )
}
