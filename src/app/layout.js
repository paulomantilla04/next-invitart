import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import {Providers} from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InvitARTE",
  description: "Invitaciones digitales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Header />
        {children}
      </Providers>
      </body>
    </html>
  );
}
