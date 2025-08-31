"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/theme";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="fixed top-0 z-[999] flex items-center justify-between bg-bg text-text px-6 py-3 border-b bg-background-light dark:background-dark border-gray-200 dark:border-gray-700 left-0 right-0">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="font-bold text-lg text-primary">
          MyUILib
        </Link>
      </div>

      {/* Middle: Desktop Nav */}
      <div className="hidden md:flex space-x-6">
        <Link href="/docs" className="hover:text-primary">Docs</Link>
        <Link href="/components/overview" className="hover:text-primary">Components</Link>
        <Link href="/guides" className="hover:text-primary">Guides</Link>
        <Link href="/examples" className="hover:text-primary">Examples</Link>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <button
          className="hidden sm:block px-3 py-1 rounded bg-muted text-white hover:bg-primary transition"
          onClick={() => alert("Open search modal (Ctrl+K)")}
        >
          Ctrl K
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-muted transition"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        {/* GitHub link */}
        <a
          href="https://github.com/your-repo"
          target="_blank"
          className="hover:text-primary"
        >
          GitHub
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-14 left-0 w-full bg-bg border-t border-gray-200 dark:border-gray-700 flex flex-col p-4 space-y-3 md:hidden">
          <Link href="/docs" className="hover:text-primary">Docs</Link>
          <Link href="/components" className="hover:text-primary">Components</Link>
          <Link href="/guides" className="hover:text-primary">Guides</Link>
          <Link href="/examples" className="hover:text-primary">Examples</Link>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            className="hover:text-primary"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
