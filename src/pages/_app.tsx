import { RootProvider } from "@/components/providers";
import type { AppProps } from "next/app";
import 'src/components/templates/Details/form.css';

import "@/styles/style.css";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <RootProvider>
      {isMounted ? <Component {...pageProps} /> : null}
    </RootProvider>
  );
}
