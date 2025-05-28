import "../styles/globals.css";
import AmplitudeInitializer from "../components/AmplitudeInitializer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.eu.amplitude.com/script/df29fe1aed20b0bf7d9d94356365d692.experiment.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-background text-base-content">
      <AmplitudeInitializer />
        {/* <Navbar /> */}
        <main className="container mx-auto px-4 lg:px-8 py-8 min-h-screen">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
