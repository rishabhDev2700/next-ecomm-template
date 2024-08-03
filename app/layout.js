import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/custom/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { urbanist, teko } from "@/components/custom/fonts";
import Cart from "@/components/custom/contexts";
import Footer from "@/components/custom/footer";
export const metadata = {
  title: "Fuzz Store",
  description: "Built with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Cart>
            <Navbar></Navbar>
            {children}
            <Toaster />
          </Cart>
            <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
