"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/app/hooks/useAnimate";
import Button from "../Button";
import { ReactNode } from "react";

export default function TransitionLink({
  href,
  label,
  cn,
  color,
  svg,
}: {
  cn?: string;
  href: string;
  label?: string;
  color?: "inverted" | undefined;
  svg?: {
    icon?: "start" | undefined;
    component: ReactNode;
  };
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <Button
      cn={`rounded-xl border border-solid cursor-pointer  ${cn}`}
      color={color}
      handleClick={handleClick}
      label={label || ""}
      svg={svg}
    />
  );
}
