import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 4rem", background: "var(--bg2)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--blue2)" }}>
          // formação & certificações
        </div>
        <h2
          className="reveal text-4xl md:text-5xl font-semibold tracking-tight mb-16"
          style={{ letterSpacing: "-0.03em" }}
        >
          Formação Acadêmica
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Education timeline */}
          <div>
            <div className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "#506080" }}>
              Graduação & Pós-graduação
            </div>
            <div className="relative">
              <div
                className="absolute left-0 top-2 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, var(--blue), transparent)" }}
              />
              {education.map((ed) => (
                <div key={ed.degree} className="timeline-item relative pl-8 pb-10">
                  <div
                    className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full"
                    style={{
                      background: ed.current ? "var(--cyan)" : "var(--blue)",
                      boxShadow: `0 0 0 3px var(--bg2), 0 0 0 4px ${ed.current ? "rgba(34,211,238,0.3)" : "rgba(59,130,246,0.3)"}`,
                    }}
                  />
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#506080" }}>
                      {ed.period}
                    </span>
                    {ed.current && (
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(34,211,238,0.1)",
                          color: "var(--cyan)",
                          border: "1px solid rgba(34,211,238,0.2)",
                        }}
                      >
                        Em andamento
                      </span>
                    )}
                  </div>
                  <div className="text-base font-semibold mb-0.5" style={{ color: "#e8edf8" }}>
                    {ed.degree}
                  </div>
                  <div className="text-sm" style={{ color: "var(--blue2)" }}>
                    {ed.institution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "#506080" }}>
              Certificações
            </div>
            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="reveal flex items-start gap-4 p-5 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-12 h-12 min-w-[48px] rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-0.5" style={{ color: "#e8edf8" }}>
                      {cert.name}
                    </div>
                    <div className="text-xs mb-2" style={{ color: "var(--blue2)" }}>
                      {cert.issuer}
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(16,185,129,0.1)",
                          color: "#6ee7b7",
                          border: "1px solid rgba(16,185,129,0.2)",
                        }}
                      >
                        ✓ Emitido em {cert.issued}
                      </span>
                      <span className="font-mono text-xs" style={{ color: "#506080" }}>
                        Expira em {cert.expires}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Placeholder card */}
              <div
                className="reveal flex items-center justify-center p-5 rounded-xl text-sm"
                style={{
                  background: "transparent",
                  border: "1px dashed var(--border2)",
                  color: "#506080",
                  minHeight: 72,
                }}
              >
                <span className="font-mono text-xs tracking-wider">+ mais certificações em breve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
