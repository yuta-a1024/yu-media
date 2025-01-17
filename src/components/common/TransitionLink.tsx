import { useTransitionRouterPush } from "@/hooks/useTransitionRouterPush";
import Link from "next/link";
import { FC, useCallback } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

export const TransitionLink: FC<Props> = ({ href, children, onClick, className }) => {
  const { routerPushWithTransition } = useTransitionRouterPush();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }

      const to = e.currentTarget.href;
      routerPushWithTransition(to);
    },
    [routerPushWithTransition, onClick]
  );

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};