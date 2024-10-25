import { Outfit } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

// Define the font to be used
const outfit = Outfit({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: "Blog App",
  description: "Created By Ayush Chauhan & Devraj Kohli",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body
    //     className={outfit.className}>{children}</body>
    // </html>
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NextUIProvider>
            <div>
              <header className="flex justify-end mr-10">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>
              <main>{children}</main>
            </div>
          </NextUIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
