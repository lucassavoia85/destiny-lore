import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Grid from "./components/Grid";

export const metadata: Metadata = {
  title: "Destiny Lore",
  description: "Aqui você vera tudo sobre o universo de Destiny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <Grid>{children}</Grid>
           <Footer />
      </body>
    </html>
  );
}

