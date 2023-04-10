'use client';

import { FC } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";


export const BreadCrumb: FC = () => {
    const pathname = usePathname().split('/')[1];

    return (
        <span className="select-none"> 
            <Link href={'/'} className="px-1 rounded-md hover:bg-black/5">andres antillon</Link>
            {pathname == '/' ? 
                '' : (<><span>/</span><Link href={'/' + pathname} className="px-1 rounded-md hover:bg-black/5">{pathname}</Link></>)
            } 
        </span>
    )
}