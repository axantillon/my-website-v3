import { Hello } from "@/components/Hello";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen px-4 sm:px-10">
        <Hello/>

        <div className="">
          <span>working on things on the side has never been my thing, but here are some side <b>projects</b> i&apos;ve done in the past</span>
        </div>
    </main>
  )
}
