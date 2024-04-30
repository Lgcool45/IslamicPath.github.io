// import { Outlet } from "react-router";
import { Outlet } from "@tanstack/react-router";
import { NavMenu } from "@/components/NavMenu/nav-bar";
import { ThemeProvider } from "@/contexts/theme-provider";
import 'react-h5-audio-player/lib/styles.css';

function Root() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="islamic-path-ui-theme">
      <div className="w-full h-full">
        <NavMenu />
        <Outlet />
        <footer className="p-6 text-center bg-background mt-8">
          <div className="container">
            <p>© 2024 IslamicPath. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default Root
