"use client";

import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "100px 4rem", background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--blue2)" }}>
          {"// tech stack"}
        </div>
        <h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
          Technologies I Use
        </h2>
        <p className="reveal text-base font-light mb-16 max-w-lg" style={{ color: "#8da0c4" }}>
          My current go-to toolkit, refined over years of building production-grade systems.
        </p>

        <div className="flex flex-col gap-12">
          {stack.map((cat) => (
            <div key={cat.category} className="reveal">
              <div className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: "#506080" }}>
                {cat.category}
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="tech-chip flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm cursor-default select-none hover:border-blue-500/40 hover:text-[#e8edf8]"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "#8da0c4",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 6px 20px rgba(59,130,246,0.1)";
                      el.style.background = "var(--surface2)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "none";
                      el.style.background = "var(--surface)";
                    }}
                  >
                    <span className="w-[18px] h-[18px] flex items-center justify-center text-xs rounded">{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
