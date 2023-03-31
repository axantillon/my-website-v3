import { Hello } from "@/components/Hello";
import { NavBar } from "@/components/navBar";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen text-black dark:text-white bg-gray-100 dark:bg-gray-900">
      <NavBar/>

      <Hello/>
    </main>
  )
}
