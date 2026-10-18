import { ImageResponse } from "next/og";

export const alt = "Saleh Haydar, full-stack developer in Deir Ammar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview shown when the site link is shared on LinkedIn, WhatsApp, X, Slack and similar.
export default function OpengraphImage() {
  const lines: [string, string, boolean?][] = [
    ["x-role", "full-stack developer"],
    ["x-stack", "next.js, react, typescript, node.js"],
    ["x-security", "owasp-top-10; web-pentesting; hackerone", true],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#eceef1",
          color: "#141b2b",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.9 }}>
          <div style={{ fontSize: 132, fontWeight: 700, letterSpacing: -5 }}>Saleh</div>
          <div style={{ fontSize: 132, fontWeight: 700, letterSpacing: -5, paddingLeft: 72 }}>Haydar</div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 34, fontWeight: 600 }}>
            <span>Full-stack developer in D</span>
            <span style={{ fontSize: 26, fontWeight: 400, color: "#586274", marginTop: 8 }}>
              Next.js, React, Node.js. Security built in.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "22px 26px",
              background: "#f7f8fa",
              border: "1px solid #cdd2da",
              borderRadius: 12,
              fontFamily: "monospace",
              fontSize: 20,
              gap: 6,
            }}
          >
            {lines.map(([k, v, mark]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  padding: "2px 8px",
                  background: mark ? "#f3d35b" : "transparent",
                  borderRadius: 3,
                }}
              >
                <span style={{ color: mark ? "#141b2b" : "#586274" }}>{k}:&nbsp;</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
