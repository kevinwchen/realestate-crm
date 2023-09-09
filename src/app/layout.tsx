import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Estate CRM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body className="min-h-screen flex flex-col justify-between">
          <Header />
          <main className="container mb-auto">
            <div className="flex items-stretch justify-center">
              <div className="mt-20">{children}</div>
            </div>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
