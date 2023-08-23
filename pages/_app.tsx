import { CartProvider } from "@/context/cart";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <CartProvider>
    <Component { ...pageProps } />
  </CartProvider>
)

export default MyApp;
