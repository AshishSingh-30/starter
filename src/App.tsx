import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

type AppProps = {
  enableTheme: boolean;
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        className="mt-2"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </Button>

      <div className="mt-4 font-mono text-xs text-muted-foreground">
        Press <kbd>d</kbd> to toggle the theme using the keyboard.
      </div>
    </>
  );
}

export function App({ enableTheme }: AppProps) {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We've already added the button component for you.</p>

          {enableTheme ? (
            <ThemeToggle />
          ) : (
            <div className="mt-4 font-mono text-xs text-muted-foreground">
              ThemeProvider is disabled.
              <br />
              Enable it in <code>src/main.tsx</code> to use dark mode.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;