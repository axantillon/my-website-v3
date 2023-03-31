import 'tailwindcss/tailwind.css' 
import { Space_Mono} from 'next/font/google'
import ThemeProvider from '@/context/themeProvider'

const space = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: 'axantillon',
  description: 'website of axantillon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={space.className}>
        <body className=''>
            <ThemeProvider attribute='class'>
              {children}
            </ThemeProvider>
        </body> 
    </html>
  )
}
