import "./globals.css";

export const metadata = {
  title: "B Revanth Kumar | Digital Growth Engineer",
  description:
    "I design and build digital systems that turn attention into revenue.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-foreground overflow-x-hidden">
        {/* BACKGROUND STACK */}
        <div className="bg-base" />
        <div className="bg-glow" />
        <div className="bg-grid" />

        {/* FOREGROUND */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
