import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jio Frontend Assignement",
  description: "frontend, assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div>{children}</div>

        <script
          src="https://kit.fontawesome.com/b8e3505483.js"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
