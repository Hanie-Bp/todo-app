"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { Loader2 } from "lucide-react";
import { useSheetMenu } from "@/context/SheetMenuContext";

const LinksSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setOpen } = useSheetMenu();
  const [isPending, startTransition] = useTransition();
  const [clickedHref, setClickedHref] = useState<string | null>(null);

  const links = [
    { name: "All tasks", href: "/" },
    { name: "Important tasks", href: "/important-tasks" },
    { name: "Completed tasks", href: "/completed-tasks" },
    { name: "Uncompleted tasks", href: "/uncompleted-tasks" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setClickedHref(href);
    startTransition(() => {
      router.push(href);
      setOpen(false);
    });
  };

  return (
    <section className="flex flex-col justify-between mt-6 h-32">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const isClicked = clickedHref === link.href && isPending;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`px-3 py-2 text-sm font-medium flex items-center gap-2 transition-colors ${
              isActive
                ? "text-red-500 bg-red-100 border-r-[3px] border-red-700"
                : "text-muted-dark dark:text-foreground font-bold hover:text-red-600"
            }`}
          >
            {isClicked && (
              <Loader2 className="w-4 h-4 animate-spin text-red-500" />
            )}
            {link.name}
          </Link>
        );
      })}
    </section>
  );
};

export default LinksSidebar;
