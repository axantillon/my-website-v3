import { BlockMapType, NotionRenderer } from "react-notion";
import "@/styles/notion.css"
import { ProjectType } from "@/types/projects";
import { FiLink, FiGithub } from "react-icons/fi";

const getProjectContent = async (id: string) => {
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {cache: 'no-cache'});

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function ProjectPage({ params }: {params: {id: string}}) {

    const projectContent = await getProjectContent(params.id) as BlockMapType;
    const props = extractProperties(params.id, projectContent);

    return (
        <div className="flex flex-col space-y-8">

            <div className="flex flex-col space-y-4 p-6 border border-black rounded-sm">
                <span className="text-xl">{props.Name}</span>
                <span>{props.description}</span>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 text-sm">
                    <span className="h-min w-min px-2 py-1 bg-black/5 rounded-md">{props.language}</span>
                    <span className="h-min w-min px-2 py-1 bg-black/5 rounded-md">{props.framework}</span>
                    <a href={props.link} className="flex space-x-1 px-2 py-1 items-center md:justify-center cursor-pointer rounded-lg bg-black/5">
                        <FiLink/>
                        <span>{props.link}</span>
                    </a>
                    <a href={props.repo} className="flex w-min space-x-1 px-2 py-1 items-center md:justify-center cursor-pointer rounded-lg bg-black/5">
                        <FiGithub/>
                        <span>github</span>
                    </a>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-[75vw]">
                    <NotionRenderer blockMap={projectContent} />
                </div>
            </div>
        </div>
    )
}

const extractProperties = (id: string, block: any) : ProjectType => {
    const prj = block[id].value.properties;

    return {
        id: id,
        Name: prj.title[0][0],
        description: prj['\\JXO'][0][0],
        link: prj['kck{'][0][0],
        repo: prj.cSha[0][0],
        framework: prj['jw]Z'][0][0],
        language: prj['S\\Tz'][0][0]
    }
}