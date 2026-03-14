import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 4rem", background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--blue2)" }}>
          // work history
        </div>
        <h2
          className="reveal text-4xl md:text-5xl font-semibold tracking-tight mb-16"
          style={{ letterSpacing: "-0.03em" }}
        >
          Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--blue), transparent)" }}
          />

          {experience.map((job) => (
            <div key={job.role + job.company} className="timeline-item relative pl-10 pb-14">
              {/* Dot */}
              <div
                className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full"
                style={{
                  background: "var(--blue)",
                  boxShadow: "0 0 0 3px var(--bg), 0 0 0 4px rgba(59,130,246,0.3)",
                }}
              />

              {/* Meta */}
              <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "#506080" }}
                >
                  {job.period}
                </span>
                {job.current && (
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(34,211,238,0.1)",
                      color: "var(--cyan)",
                      border: "1px solid rgba(34,211,238,0.2)",
                    }}
                  >
                    Current
                  </span>
                )}
              </div>

              <div className="text-lg font-semibold mb-1" style={{ color: "#e8edf8" }}>
                {job.role}
              </div>
              <div className="text-sm mb-4" style={{ color: "var(--blue2)" }}>
                {job.company}
              </div>

              <ul className="flex flex-col gap-1.5 list-none">
                {job.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#8da0c4" }}>
                    <span
                      className="font-mono text-xs mt-0.5 shrink-0"
                      style={{ color: "var(--blue2)" }}
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
