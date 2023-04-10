import { Hello } from "@/components/Hello";
import ProjectGrid from "@/components/projects/projectGrid";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Hello/>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col text-sm">
            <span>working on things on the side has never been my thing, </span>
            <span> but here are some side <span className="text-lg font-extrabold text-emerald-500">projects</span> i&apos;ve done in the past</span>
          </div>

          {/* @ts-expect-error Async Server Component */}
          <ProjectGrid limit={true}/>
        </div>
    </div>
  )
}
