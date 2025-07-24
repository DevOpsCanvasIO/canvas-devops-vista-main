import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [isInitialized, setIsInitialized] = React.useState(false)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    setIsInitialized(true)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Return false during server-side rendering and until client-side initialization
  return isInitialized ? isMobile : false
}
