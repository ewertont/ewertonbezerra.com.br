"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: "120px 4rem 80px" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,93,61,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,93,61,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Glow blobs */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(232,93,61,0.14) 0%, transparent 70%)",
          top: -100,
          right: -100,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,122,92,0.08) 0%, transparent 70%)",
          bottom: 100,
          left: -50,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <div
          className="hero-anim-1 inline-flex items-center gap-2 mb-8 font-mono text-xs tracking-widest uppercase rounded-full px-4 py-1.5"
          style={{
            color: "var(--accent2)",
            background: "rgba(232,93,61,0.08)",
            border: "1px solid rgba(232,93,61,0.2)",
          }}
        >
          <span
            className="badge-dot inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--accent2)" }}
          />
          {siteConfig.available ? "Disponível para novos projetos" : "Indisponível no momento"}
        </div>

        {/* Title */}
        <h1
          className="hero-anim-2 font-semibold leading-none tracking-tight mb-3 text-white"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
        >
          {siteConfig.name.split(" ")[0]} <span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <h2
          className="hero-anim-2 font-semibold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}
        >
          <span className="text-white">Senior Fullstack Developer</span>
        </h2>

        {/* Subtitle */}
        <p
          className="hero-anim-3 text-lg leading-relaxed mb-10 font-light max-w-xl"
          style={{ color: "var(--text-body)" }}
        >
          {siteConfig.heroSubtitle}
        </p>

        {/* CTAs */}
        <div className="hero-anim-4 flex flex-wrap gap-4 items-center">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "var(--accent)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(255, 126, 98, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <BriefcaseIcon /> Ver Experiência
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-normal no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: "#ffffff", border: "1px solid var(--accent)", background: "transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            <ChatIcon /> Entrar em Contato
          </a>
        </div>

        {/* Stats */}
        <div
          className="hero-anim-5 flex flex-wrap gap-12 mt-16 pt-10"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {siteConfig.stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-semibold leading-none text-white">
                {s.value.includes("+") ? (
                  <>
                    {s.value.replace("+", "")}
                    <span style={{ color: "var(--accent)" }}>+</span>
                  </>
                ) : s.value.includes("%") ? (
                  <>
                    {s.value.replace("%", "")}
                    <span style={{ color: "var(--accent)" }}>%</span>
                  </>
                ) : (
                  s.value
                )}
              </div>
              <div className="mt-1 text-xs font-mono tracking-widest uppercase" style={{ color: "var(--text-body)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code card — visible on large screens */}
      <div className="hero-anim-6 hidden xl:block absolute right-16 top-1/2 -translate-y-1/2">
        <div
          className="w-80 rounded-2xl overflow-hidden font-mono text-xs"
          style={{ background: "var(--surface)", border: "1px solid var(--border2)" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3.5"
            style={{ background: "var(--surface2)", borderBottom: "1px solid var(--border)" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 text-xs" style={{ color: "#6b5d56" }}>
              api/products/route.ts
            </span>
          </div>
          <div className="p-5 leading-loose">
            <CodeLine>
              <Kw>import</Kw>{" "}<Ty>{"{ NextRequest }"}</Ty>{" "}<Kw>from</Kw>{" "}<Str>&apos;next/server&apos;</Str>
            </CodeLine>
            <CodeLine>
              <Kw>import</Kw>{" "}<Ty>{"{ db }"}</Ty>{" "}<Kw>from</Kw>{" "}<Str>&apos;@/lib/db&apos;</Str>
            </CodeLine>
            <CodeLine>&nbsp;</CodeLine>
            <CodeLine>
              <Kw>export async function</Kw>{" "}<Fn>GET</Fn>{"("}
            </CodeLine>
            <CodeLine>
              <span className="pl-6"><Ty>req</Ty>{": "}<Ty>NextRequest</Ty></span>
            </CodeLine>
            <CodeLine>{")"}{" {"}</CodeLine>
            <CodeLine>
              <span className="pl-6"><Kw>try</Kw>{" {"}</span>
            </CodeLine>
            <CodeLine>
              <span className="pl-12">
                <Kw>const</Kw>{" products = "}<Kw>await</Kw>{" "}<Fn>db.product.findMany</Fn>{"({"}
              </span>
            </CodeLine>
            <CodeLine>
              <span className="pl-16">
                {"take: "}<Num>20</Num>{", where: { active: "}<Kw>true</Kw>{" }"}
              </span>
            </CodeLine>
            <CodeLine>
              <span className="pl-12">{"})"})</span>
            </CodeLine>
            <CodeLine>
              <span className="pl-12">
                <Kw>return</Kw>{" "}<Fn>Response</Fn>{".json({ products })"}
              </span>
            </CodeLine>
            <CodeLine>
              <span className="pl-6">{"} "}<Kw>catch</Kw>{" (e) {"}</span>
            </CodeLine>
            <CodeLine>
              <span className="pl-12">
                <Kw>return</Kw>{" "}<Fn>Response</Fn>{".json({ error: "}<Str>&apos;500&apos;</Str>{"}, { status: "}<Num>500</Num>{" })"}
              </span>
            </CodeLine>
            <CodeLine>
              <span className="pl-6">{"}"}</span>
            </CodeLine>
            <CodeLine>{"}"}</CodeLine>
          </div>
        </div>
      </div>
    </section>
  );
}

const Kw = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#e85d3d" }}>{children}</span>
);
const Fn = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#ff9a7a" }}>{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#6ee7b7" }}>{children}</span>
);
const Ty = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#fcd34d" }}>{children}</span>
);
const Num = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#ff7a5c" }}>{children}</span>
);
const CodeLine = ({ children }: { children: React.ReactNode }) => (
  <span className="block">{children}</span>
);

const BriefcaseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);
const ChatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);