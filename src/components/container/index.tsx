import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`min-h-screen flex flex-col bg-primary ${className}`}>
      {children}
    </div>
  );
};
