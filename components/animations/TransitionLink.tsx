"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/app/hooks/useAnimate";

export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button
      className={
        "border-[1px] border-none p-4 rounded-xl bg-inherit cursor-pointer z-10"
      }
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
