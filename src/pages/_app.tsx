import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import NavBar from "~/components/layout/NavBar";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`font-sans ${inter.variable} h-screen w-screen bg-gradient-to-b from-blue-500 to-red-500`}
    >
      <div className="h-24">
        <NavBar />
      </div>
      <div className="h-[calc(100vh-6rem)]">
        <Component {...pageProps} />
      </div>
    </main>
  );
};

export default api.withTRPC(MyApp);
