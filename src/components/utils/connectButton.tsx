'use client'
import { ConnectKitButton } from "connectkit";
import { FC } from "react";

export const ConnectButton: FC = () => {

    return (
        <ConnectKitButton.Custom>
            {({ isConnected, truncatedAddress, show, ensName }) => {
                return (
                    <div onClick={show} className="h-7 px-2 rounded-md border border-black dark:border-white cursor-pointer">
                        {isConnected ? 
                            ensName ? 
                                ensName : truncatedAddress 
                        : 'connect your wallet'}
                    </div>
                )
            }}
        </ConnectKitButton.Custom>
    )
}