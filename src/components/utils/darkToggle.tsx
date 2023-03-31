'use client'
import { useTheme } from "next-themes"
import { FC, useCallback, useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

export const DarkToggle: FC = () => {
    
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme])

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div onClick={toggleTheme} className="h-10 w-10 flex items-center justify-center rounded-full border border-black dark:border-white text-white dark:text-black bg-gray-900 dark:bg-gray-100 cursor-pointer">
            {resolvedTheme === 'light' ? <FiMoon/> : <FiSun/>}
        </div>
    )
}