import { ThemeProvider } from "next-themes";
import "@/styles/global.css";

export const metadata = {
  description: "Danny Ochoa's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
