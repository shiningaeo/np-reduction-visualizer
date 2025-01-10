import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './components/Navbar';
import TabMenu from "./components/TabMenu";
import ScrollToTopOnRefresh from "./components/ScrollToTop";
import "./styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NP Reduction Visualizer",
  description: "Step-by-step walkthroughs of NP-hard reductions",
  icons: {
    icon: '/np-reduction-visualizer/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-502XLDVDR4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-502XLDVDR4');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ScrollToTopOnRefresh />
        <Navbar />
        {children}
        <div id="projects">
          <TabMenu />
        </div>
      </body>
    </html>
  );
}