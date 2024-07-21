
import { Footer } from "@/components/principal/Footer";
import { Header } from "@/components/principal/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drago Tech",
  description: "Generated by create next app",
};

export default function PrincipalLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  );
}
