import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeContextProvider } from "@/context/Themecontext";
import ThemeProvider from './../provider/ThemeProvider';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
          <div className="container1 dark:bg-slate-950 dark:text-white h-full ">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
