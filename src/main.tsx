import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

const ENABLE_THEME_PROVIDER = false

const OptionalThemeProvider = ({ children }: { children: React.ReactNode }) =>
  ENABLE_THEME_PROVIDER ? (
    <ThemeProvider>{children}</ThemeProvider>
  ) : (
    <>{children}</>
  )

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OptionalThemeProvider>
      <App enableTheme={ENABLE_THEME_PROVIDER} />
    </OptionalThemeProvider>
  </StrictMode>
)
