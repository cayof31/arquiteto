"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

function NavLink({ href, label, onClick, className }: NavLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    const [path, hash] = href.split('#');
    const onHome = path === pathname || pathname === '/';
    if (onHome && hash) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white">
        <div className="mx-auto flex h-14 items-center justify-between px-6 md:px-12">
          <Link href="/" className="font-serif text-2xl font-bold relative z-50">
            Studio Vértice
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/#studio" label="Studio" className="uppercase text-sm tracking-widest font-medium hover:opacity-70 transition-opacity" />
            <NavLink href="/#projetos" label="Projetos" className="uppercase text-sm tracking-widest font-medium hover:opacity-70 transition-opacity" />
            <NavLink href="/#contato" label="Contato" className="uppercase text-sm tracking-widest font-medium hover:opacity-70 transition-opacity" />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-6 h-5 flex flex-col justify-between"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-current origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-full bg-current"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-current origin-center"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-zinc-900 flex flex-col items-center justify-center gap-10"
          >
            {[
              { href: '/#studio', label: 'Studio' },
              { href: '/#projetos', label: 'Projetos' },
              { href: '/#contato', label: 'Contato' },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
              >
                <NavLink href={link.href} label={link.label} onClick={() => setMenuOpen(false)} className="text-4xl font-serif text-white hover:text-white/60 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}