import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal Pages",
  description: "Internal pages no nee to login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className="container"
          style={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "200px 1fr", // Fixed width for sidebar and flexible width for content
            gridTemplateRows: "auto 1fr", // Auto height for header and flexible height for content
            gridTemplateAreas: `
              "header header"
              "sidebar content"
            `,
            rowGap: "auto",
            alignItems: "stretch",
            justifyItems: "stretch"
          }}
        >
          <div className="header bg-blue-200" style={{ gridArea: "header", height: "50px",width:"100vw" }}>
            <h1>Header</h1>
          </div>
          <div className="sidebar bg-yellow-200" style={{ gridArea: "sidebar" }}>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </div>
          <div className="content bg-white" style={{ gridArea: "content" }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
