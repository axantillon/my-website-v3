import { ProjectType } from "@/types/projects";
import { ProjectBlock } from "./projectBlock";
import Link from "next/link";

const getProjects = async () => {
    const res = await fetch('https://notion-api.splitbee.io/v1/table/9cde922692e14e36a6f1baa681e6ce4b', {cache: 'no-cache'});

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function ProjectGrid({limit=false}: {limit?: boolean}) {

    let projects = await getProjects() as ProjectType[];

    if (limit) {
        projects = projects.slice(0, 3);
    }

    return (
        <div className="flex flex-wrap">
            {projects.map((prj, i) => (
                <ProjectBlock prj={prj} key={i}/>
            ))}
            {limit && (
                <Link href={'/projects'}>
                    <div className="flex items-center w-36 h-64 md:w-64 md:h-44 mr-2 md:mr-12 mb-8 p-4 border border-black rounded-sm">
                        <span className="underline">View All...</span>
                    </div>
                </Link>
            )}
        </div>
    )
}