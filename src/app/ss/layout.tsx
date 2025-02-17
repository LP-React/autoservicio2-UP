"use client";

import "./../globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Login } from "@/components/Login";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData }: any = useContext(UserContext);

  console.log(userData);

  return (
    <div>
      <Nav />
      <div className="flex p-3 mb-56">
        {userData === null ? <Login /> : ""}
        {children}
      </div>
      <Footer />
    </div>
  );
}
