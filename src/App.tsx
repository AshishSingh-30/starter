import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We've already added the button component for you.</p>

          <Button
            className="mt-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </Button>
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          Press <kbd>d</kbd> to toggle the theme using the keyboard.
          <br />
          <span className="opacity-70">
            (Optional: enable the ThemeProvider in{" "}
            <code>src/main.tsx</code>.)
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;