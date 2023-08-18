import SideNavLayout from "@/components/Layout/SideNavLayout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { TransitionProvider } from "@/context/TransitionContext";
import { ReactNode } from "react";

/**
 * `Layout` 컴포넌트.
 *
 * 공통적인 레이아웃 및 스타일링을 제공하며, 자식 컴포넌트들에게 상태 관리 및 테마를 제공합니다.
 *
 * @param {ReactNode} children
 */
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
