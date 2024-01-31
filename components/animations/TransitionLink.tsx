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
        "border-[1px] p-4 rounded-xl border-none bg-blend-darken cursor-pointer z-10"
      }
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
