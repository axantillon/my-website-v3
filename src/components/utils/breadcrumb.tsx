'use client';

import { FC } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";


export const BreadCrumb: FC = () => {
    const pathname = usePathname();

    return (
        <span className="select-none"> <Link href={'/'} className="px-2 rounded-sm hover:bg-zinc-200">andres antillon</Link>{pathname == '/' ? '' : pathname} </span>
    )
}