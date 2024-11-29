import "@/styles/global.css";

export const metadata = {
  description: "Danny Ochoa's personal website",
  icons: {
    icon: [{ url: "/favicon/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
