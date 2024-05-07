import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "못해솔로",
  description: "당신의 이상형은 어딴 모습인가요?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            maxWidth: "480px",
            minWidth: "375px",
            width: "100%",
            margin: "0 auto",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          {children}
        </main>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
        />
      </body>
    </html>
  );
}
