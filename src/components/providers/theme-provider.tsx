"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return children wrapped in a div to avoid hydration mismatch
    return <div suppressHydrationWarning>{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
