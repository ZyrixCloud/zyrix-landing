import "./globals.css";import type { Metadata } from "next";
export const metadata: Metadata={title:"Zyrix – Sovereign‑Ready PaaS",description:"Secure, local, compliant cloud deployments for Turkey & MENA."};
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en"><body>{children}</body></html>);}