import "../globals.css";
import MainHeader from "@/components/MainHeader";
import RQProvider from "@/components/RQProvider";

export const metadata = {
  title: "Next.js Rendering",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          <RQProvider>{children}</RQProvider>
        </div>
      </body>
    </html>
  );
}
