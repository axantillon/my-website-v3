import { ProjectType } from "@/types/projects";
import Link from "next/link";
import { FC } from "react";
import { FiGithub, FiLink } from "react-icons/fi";


export const ProjectBlock: FC<{prj: ProjectType}> = ({prj}) => {

    return (
        <div className="flex flex-col w-72 h-44 p-4 border border-black rounded-sm">  
            <div id="header" className="flex items-center justify-between h-1/4">
                <span>{prj.Name}</span>
                <a href={prj.link} className="flex w-6 h-6 items-center justify-center cursor-pointer rounded-lg hover:bg-black/5">
                    <FiLink/>
                </a>
            </div>
            <div id="body" className="flex flex-col justify-between py-1 h-2/4">
                <p className="text-xs leading-tight">{prj.description}</p>
                <Link href={`/projects/${prj.id}`}>
                    <span className="text-xs underline">view more...</span>
                </Link>
            </div>
            <div id="footer" className="flex h-1/4 items-center justify-between">
                <div className="flex space-x-2 text-xs">
                    <span className="px-2 py-1 bg-black/5 rounded-md">{prj.language}</span>
                    <span className="px-2 py-1 bg-black/5 rounded-md">{prj.framework}</span>
                </div>
                <a href={prj.repo} className="flex w-6 h-6 items-center justify-center cursor-pointer rounded-lg hover:bg-black/5">
                    <FiGithub/>
                </a>
            </div>
        </div>
    )
}