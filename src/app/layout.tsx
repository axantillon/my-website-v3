import { Footer } from '@/components/layout/footer'
import { NavBar } from '@/components/layout/navBar'
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
                  <main className="min-h-screen w-screen px-6 sm:px-10">
                    {children}
                  </main>
                  <Footer/>
                </ThemeProvider>
            </Web3Provider>
        </body> 
    </html>
  )
}
