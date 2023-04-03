'use client'
import { useTheme } from "next-themes";
import { FC, useEffect, useRef, useState } from "react";
import { ConnectButton } from "./utils/connectButton";
var ReactRotatingText = require('react-rotating-text');

export const Hello: FC = () => {

    const rotatingText = useRef<typeof ReactRotatingText>(null);
    const names = ['andres antillon.', 'axantillon.eth', 'a student.', 'a builder.', 'costa rican.'];
    const darkColors = ['white', 'blue', 'yellow', 'green', 'pink'];
    const lightColors = ['black', 'blue', 'red', 'green', 'fuchsia'];
    const [currentColor, setCurrentColor] = useState<number>(0);
    const { resolvedTheme } = useTheme();
    const [colorScheme, setColorScheme] = useState<Array<string>>( resolvedTheme === 'dark' ? darkColors : lightColors)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="w-full flex flex-col pt-32 md:pt-40 px-12 md:px-20">
            <div className="flex px-2 py-8 space-x-1">
                <span>hey,</span>
                <ConnectButton/>
            </div>
            <style>
                {`
                    .react-rotating-text-cursor {
                        animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
                    }
                    
                    @keyframes blinking-cursor {
                        0% {
                            opacity: 0;
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                    }
                `}
            </style>
            <span className={'text-4xl sm:text-8xl font-extrabold'}>
                {new Date().getHours() < 18 ?
                <> gm, </> 
                :
                <> gn, </>
                }
            </span> 
            <br/>
            <span className={'-mr-4 text-2xl sm:text-6xl'}> 
                <span> {`i'm`} </span>
                <ReactRotatingText
                    ref={rotatingText}
                    items={names}
                    color={colorScheme[currentColor]}
                    onDeletingEnd={() => (currentColor === (colorScheme.length - 1) ? setCurrentColor(0) : setCurrentColor(currentColor + 1))}
                />
            </span>
        </div>
    )
}