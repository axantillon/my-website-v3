'use client';

import { FC } from "react";
import { usePathname } from 'next/navigation';


export const BreadCrumb: FC = () => {
    const pathname = usePathname();

    return (
        <span className="select-none"> andres antillon{pathname == '/' ? '' : pathname} </span>
    )
}