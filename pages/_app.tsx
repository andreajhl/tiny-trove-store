import { CartProvider } from "@/context/cart";
import { AppProps } from "next/app";
import Script from "next/script";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <> 
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
      crossOrigin="anonymous"
    />
    <CartProvider>
      <Component { ...pageProps } />
    </CartProvider>
  </>
)

export default MyApp;
