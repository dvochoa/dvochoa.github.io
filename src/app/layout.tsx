import "@/styles/global.css";
import Header from "./components/header/header";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col h-screen">
        <Header />
        <main className="flex grow">{children}</main>
      </body>
    </html>
  );
}
