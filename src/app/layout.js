import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satoshi Nakamoto Submission",
  description: "Munaiz Ahmed's coding challenge submission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
