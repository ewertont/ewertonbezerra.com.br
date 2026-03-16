import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 4rem", background: "var(--bg2)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
          {"// about me"}
        </div>
        <h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-white" style={{ letterSpacing: "-0.03em" }}>
          Who I Am
        </h2>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Avatar — hidden on mobile */}
          <div className="hidden md:flex justify-center relative">
            <div
              className="absolute avatar-ring"
              style={{
                width: 320,
                height: 320,
                border: "1px solid var(--border)",
                borderRadius: "20px",
                top: "50%",
                left: "50%",
              }}
            />
            <div
              className="w-72 h-72 rounded-2xl flex items-center justify-center text-8xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #2a1a14 0%, #1f1210 100%)",
                border: "1px solid var(--border2)",
              }}
            >
              <span className="relative z-10">👨‍💻</span>
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(232,93,61,0.2), transparent)" }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {about.bio.map((p, i) => (
              <p key={i} className="reveal text-base leading-relaxed mb-6 font-light" style={{ color: "var(--text-body)" }}>
                {p}
              </p>
            ))}

            <div className="flex flex-col gap-3 mt-8">
              {about.highlights.map((h, i) => (
                <div
                  key={i}
                  className="reveal highlight-item flex items-start gap-4 px-5 py-4 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-8 h-8 min-w-[32px] rounded-lg flex items-center justify-center text-sm"
                    style={{ background: "var(--accent-dim)" }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <strong className="block text-sm font-medium mb-0.5" style={{ color: "#ffffff" }}>
                      {h.title}
                    </strong>
                    <span className="text-sm" style={{ color: "var(--text-body)" }}>
                      {h.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
