"use client";
import SideNavLayout from "@/components/Layout/SideNavLayout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { TransitionProvider } from "@/context/TransitionContext";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <ThemeRegistry>
          <TransitionProvider>
            <SideNavLayout>{children}</SideNavLayout>
          </TransitionProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
