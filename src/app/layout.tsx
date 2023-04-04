import { NavBar } from '@/components/navBar'
import ThemeProvider from '@/context/themeProvider'
import Web3Provider from '@/context/web3Provider'
import { Space_Mono } from 'next/font/google'
import 'tailwindcss/tailwind.css'

const space = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: 'axantillon',
  description: "axantillon's digital haven",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={space.className}>
        <body className='text-black dark:text-white bg-gray-100 dark:bg-gray-900'>
            <Web3Provider>
                <ThemeProvider attribute='class'>
                  <NavBar/>
                  {children}
                </ThemeProvider>
            </Web3Provider>
        </body> 
    </html>
  )
}
