"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setToast({ msg: "⚠ Preencha todos os campos.", ok: false });
      setTimeout(() => setToast(null), 3500);
      return;
    }
    setForm({ name: "", email: "", message: "" });
    setToast({ msg: "✓ Mensagem enviada! Retorno em breve.", ok: true });
    setTimeout(() => setToast(null), 3500);
  };

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: "12px 16px",
    color: "#e8edf8",
    fontSize: 14,
    width: "100%",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  const contactLinks = [
    { icon: "✉️", label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: <GithubIcon />, label: "github.com/ewertonbezerra", href: siteConfig.github },
    { icon: <LinkedinIcon />, label: "linkedin.com/in/ewertonbezerra", href: siteConfig.linkedin },
  ].filter((l) => l.href && l.href !== "");

  return (
    <section id="contact" style={{ padding: "100px 4rem", background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-[1px] w-12" style={{ background: "var(--accent)" }}></div>
          <div className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            {"Contacts"}
          </div>
        </div>
        <h2
          className="reveal text-4xl md:text-5xl font-semibold tracking-tight mb-20 text-white"
          style={{ letterSpacing: "-0.03em" }}
        >
          Have a project? <br /> Let&apos;s talk!
        </h2>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Info */}
          <div className="reveal">
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-body)" }}>
              Tem um projeto em mente, quer discutir arquitetura ou apenas trocar uma ideia? Minha caixa de entrada está sempre aberta.
            </p>

            <div className="flex flex-col">
              {contactLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 no-underline text-sm transition-colors duration-200 hover:text-[#ff7e62]"
                  style={{ color: "var(--text-body)", borderBottom: "1px solid var(--border)" }}
                >
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-sm shrink-0"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs tracking-widest uppercase" style={{ color: "#ffffff" }}>
                Nome
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs tracking-widest uppercase" style={{ color: "#ffffff" }}>
                Email
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs tracking-widest uppercase" style={{ color: "#ffffff" }}>
                Mensagem
              </label>
              <textarea
                placeholder="Fale sobre seu projeto ou ideia..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl text-sm font-medium text-white border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 w-full"
              style={{ background: "var(--accent)", fontFamily: "inherit" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(255, 126, 98, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <SendIcon /> Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      {toast && (
        <div
          className="fixed bottom-8 right-8 z-50 px-5 py-3 rounded-xl text-sm font-medium"
          style={{
            background: "var(--surface2)",
            border: `1px solid ${toast.ok ? "rgba(16,185,129,0.4)" : "rgba(239,68,68,0.4)"}`,
            color: toast.ok ? "#6ee7b7" : "#fca5a5",
            animation: "fadeUp 0.3s both",
          }}
        >
          {toast.msg}
        </div>
      )}
    </section>
  );
}

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
