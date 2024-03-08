import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className="bg-black min-w-[100vw] min-h-screen text-white">
          {children}
      </body>
    </html>
  )
}
