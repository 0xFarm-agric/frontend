import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define local Poppins font for each weight
const poppinsThin = localFont({
  src: "./fonts/Poppins-Thin.woff", // Path to the .ttf file
  variable: "--font-poppins-thin",
  weight: "100",  // Thin weight
});

const poppinsExtraLight = localFont({
  src: "./fonts/Poppins-ExtraLight.woff", // Path to the .ttf file
  variable: "--font-poppins-extralight",
  weight: "200",  // ExtraLight weight
});

const poppinsLight = localFont({
  src: "./fonts/Poppins-Light.woff", // Path to the .ttf file
  variable: "--font-poppins-light",
  weight: "300",  // Light weight
});

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.woff", // Path to the .ttf file
  variable: "--font-poppins-regular",
  weight: "400",  // Regular weight
});

const poppinsMedium = localFont({
  src: "./fonts/Poppins-Medium.woff", // Path to the .ttf file
  variable: "--font-poppins-medium",
  weight: "500",  // Medium weight
});

const poppinsSemiBold = localFont({
  src: "./fonts/Poppins-SemiBold.woff", // Path to the .ttf file
  variable: "--font-poppins-semibold",
  weight: "600",  // SemiBold weight
});

const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.woff", // Path to the .ttf file
  variable: "--font-poppins-bold",
  weight: "700",  // Bold weight
});

const poppinsExtraBold = localFont({
  src: "./fonts/Poppins-ExtraBold.woff", // Path to the .ttf file
  variable: "--font-poppins-extrabold",
  weight: "800",  // ExtraBold weight
});
const poppinsBlack = localFont({
  src: "./fonts/Poppins-Black.woff", // Path to the .ttf file
  variable: "--font-poppins-black",
  weight: "900",  // ExtraBold weight
});
export const metadata: Metadata = {
  title: "0xFarms",
  description: "Agric of the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsThin.variable} ${poppinsExtraLight.variable} ${poppinsLight.variable} ${poppinsRegular.variable} ${poppinsMedium.variable} ${poppinsSemiBold.variable} ${poppinsBold.variable} ${poppinsExtraBold.variable} ${poppinsBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
