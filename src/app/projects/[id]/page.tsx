import { BlockMapType, NotionRenderer } from "react-notion";
import "@/styles/notion.css"
import { ProjectType } from "@/types/projects";
import { FiLink, FiGithub } from "react-icons/fi";

const getProjectContent = async (id: string) => {
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`);

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
        <div className="flex flex-col px-12 space-y-8">

            <div className="flex flex-col space-y-4 p-6 border border-black rounded-sm">
                <span className="text-xl">{props.Name}</span>
                <span>{props.description}</span>
                <div className="flex space-x-4 text-sm">
                    <span className="px-2 py-1 bg-black/5 rounded-md">{props.language}</span>
                    <span className="px-2 py-1 bg-black/5 rounded-md">{props.framework}</span>
                    <a href={props.link} className="flex w-6 h-6 items-center justify-center cursor-pointer rounded-lg hover:bg-black/5">
                        <FiLink/>
                    </a>
                    <a href={props.repo} className="flex w-6 h-6 items-center justify-center cursor-pointer rounded-lg hover:bg-black/5">
                        <FiGithub/>
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