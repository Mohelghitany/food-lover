import "./globals.css";
import MainHeader from "@/components/header/mainHeader";

export const metadata = {
  title: "Food Lover",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
