import Head from "next/head";
import { ShopLayoutProps } from "@/interfaces/components/layouts";
import NavBar from "../ui/NavBar";

const ShopLayout = ({ children, title, pageDescription, imageFullUrl }: ShopLayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="author" content="Andrea Hernandez" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="baby, diapers, cribs, strollers, toys, baby clothes, baby products,items for newborns, baby shopping, bottles, educational toys" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={pageDescription} />
      { imageFullUrl && <meta name="og:image" content={imageFullUrl} /> }
    </Head>
    <NavBar />
    <main className="container">
      {children}
    </main>
  </>
);

export default ShopLayout;
