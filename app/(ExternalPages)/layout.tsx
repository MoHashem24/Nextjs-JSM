import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "External Pages",
  description: "External pages no nee to login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        External PAge no need to login without just authguard for different pages here
        {children}
      </body>
    </html>
  );
}
