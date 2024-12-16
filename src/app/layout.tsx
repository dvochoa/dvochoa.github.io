import { ThemeProvider } from "next-themes";
import "@/styles/global.css";
import ThemeToggle from "./components/theme-toggle";

export const metadata = {
  description: "Danny Ochoa's personal website",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/icon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

// TODO: Pages wrap everything in the imported Layout
// TODO: Pages pass in their specific grid to each layout
// TODO: Make sure the styling looks identical to prod
const Layout = ({ children, gridClass }: { children: React.ReactNode; gridClass: string }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={gridClass}>
        <ThemeToggle />

        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
