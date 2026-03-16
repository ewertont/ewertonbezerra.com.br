"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100)
          current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-16"
      style={{
        background: "rgba(11,17,26,0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <a
        href="#hero"
        className="font-mono text-sm tracking-wider no-underline"
        style={{ color: "var(--accent)" }}
      >
        &lt;<span style={{ color: "var(--text-body)" }}>{initials}</span> /&gt;
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm no-underline transition-colors duration-200"
              style={{
                color: active === l.href.slice(1) ? "#ffffff" : "var(--text-body)",
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="text-sm no-underline px-5 py-2 rounded-lg border transition-all duration-200"
            style={{
              color: "var(--accent)",
              background: "var(--accent-dim)",
              borderColor: "var(--accent)",
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-px bg-white" />
        <span className="block w-5 h-px bg-white" />
        <span className="block w-5 h-px bg-white" />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-16 left-0 right-0 flex flex-col gap-5 px-8 py-6 md:hidden"
          style={{
            background: "var(--bg2)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm no-underline"
              style={{ color: "var(--text-body)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm no-underline"
            style={{ color: "var(--accent)" }}
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
