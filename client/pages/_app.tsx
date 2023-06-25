import "@/styles/globals.css";
import { Inter, Quicksand } from "next/font/google";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });
const quickSand = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="761687364754-ijn209esrice5p6h1kodvaa0gd9lb303.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </div>
  );
}
