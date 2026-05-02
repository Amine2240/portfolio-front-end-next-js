"use client";
import { useTransition } from "@/context/TransitionContext";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const TransitionLink = ({ href, children, className, onClick }: Props) => {
  const { navigateTo } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();          // e.g. close the navbar first
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
