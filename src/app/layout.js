import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation"

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "ชายสี่หมี่เกี้ยว",
  description: "ร้านก๋วยเตี๋ยวเมืองฮอด",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}</body>
    </html>
  );
}
