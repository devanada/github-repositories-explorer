import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="p-5 w-screen h-screen flex flex-col items-center overflow-auto">
      <div className="w-full xl:w-[80rem] h-full">{children}</div>
    </div>
  );
};

export default Layout;
