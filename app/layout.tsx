import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
//import { TooltipProvider } from "@/components/ui/tooltip";
import { Room } from "./Room";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Figma Clone",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
      {children}
      </Room>
    </body>
  </html>
);

export default RootLayout;
//<TooltipProvider>{children}</TooltipProvider>