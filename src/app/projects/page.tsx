import ProjectGrid from "@/components/projects/projectGrid";
import "@/styles/notion.css";


export default async function Projects() {

    return (
        <div className="flex flex-col space-y-4">
            <span className="text-lg"> <span className="text-emerald-500">Side</span> Projects</span>

            {/* @ts-expect-error Async Server Component */}
            <ProjectGrid/>
        </div>
    )
}