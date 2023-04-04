'use client'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { ReactNode } from 'react'
import { WagmiConfig, createClient } from 'wagmi'

const apiKey = process.env.INFURA_API_KEY || ''

const client = createClient(
	getDefaultClient({
		appName: "axantillon's digital haven",
		autoConnect: true,
		infuraId: apiKey,
        appIcon: 'https://axantillon.xyz/favicon.ico',
	})
)

const Web3Provider = ({ children }: {children: ReactNode}) => {

    return (
        <WagmiConfig client={client}>
            <ConnectKitProvider>{children}</ConnectKitProvider>
        </WagmiConfig>
    )
}

export default Web3Provider