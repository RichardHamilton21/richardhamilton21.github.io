import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import styles from "./styles/layout.module.css";
import logo from "./assets/logo.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patty Hamilton for State Rep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Link href="/">
            <Image
              src={logo}
              alt="Patty Hamilton for 12th District State Rep"
              height="80"
            />
          </Link>
        </header>
        <main className={styles.main}>
          <div className={styles.innerContainer}>{children}</div>
        </main>
      </body>
    </html>
  );
}
