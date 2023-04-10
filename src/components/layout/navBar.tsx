import { FC } from "react"
import { BreadCrumb } from "../utils/breadcrumb"
import { DarkToggle } from "../utils/darkToggle"

export const NavBar: FC = () => {

    return (
        <div className="flex items-center justify-between w-screen h-24 px-6">
            <BreadCrumb/>
            <DarkToggle/>
        </div>
    )
}