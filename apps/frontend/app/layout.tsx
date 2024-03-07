
export default async function RootLayout({ children } : {children: React.ReactNode}) {
  return (
    <html
      lang="es"
      className="font-sf-pro-display size-full invisible-scrollbar"
    >
      <head>
      </head>
      <body className="bg-black min-w-[100vw] min-h-screen text-white">
        {children}
      </body>
    </html>
  )
}
