import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-12 text-center text-sm text-zinc-600">
      © {new Date().getFullYear()} Studio Vértice — Arquitetura e Projeto - Produzido por <Link href={"http://micro-sass.com"}>Cayo Felipe</Link>
    </footer>
  );
}
