import Link from "next/link";
import Image from "next/image";
import { CartWidget } from "./CartWidget";
import { SearchForm } from "./SearchForm";
import { Suspense } from "react";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          DevStore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/0kira-vgl.png"
            className="size-6 rounded-full"
            width={24}
            height={24}
            alt="Foto de perfil do usuário"
          />
        </Link>
      </div>
    </div>
  );
}
