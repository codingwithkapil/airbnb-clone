import { Nunito } from "next/font/google"
import './globals.css'
import Navbar from "./components/Navbar/Navbar"

export const metadata = {
  title: 'Airbnb',
  description: 'AirBnb Clone',
}

const font = Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={font.className}>{children}</body>
    </html>
  )
}
