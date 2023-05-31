
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import '../styles/app.scss'
import Header from './Header'
import { ContextProvider } from '@/components/Clients'
export const metadata = {
  title: 'TO DO APP',
  description: 'First Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContextProvider>
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
        {children}
      </body>
    </html>
  </ContextProvider>
  )
}
