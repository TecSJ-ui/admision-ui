"use client";

import Image from "next/image";

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

interface FooterProps {
  year?: number;
  institutionName?: string;
  links?: FooterLink[];
}

export default function Footer({
  year = 2026,
  institutionName = "Institución Educativa",
  links = [
    { id: "ayuda", label: "Ayuda", href: "#" },
    { id: "contacto", label: "Contacto", href: "#" },
    { id: "privacidad", label: "Privacidad", href: "#" },
  ],
}: FooterProps) {
  return (
    <footer>
      <div
        style={{
          background: "#373A3A",
          padding: "2rem 3rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            alignItems: "center",
            justifyItems: "center",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Image
            src="/assets/logos/sicytBco.png"
            alt="SICYT"
            width={180}
            height={60}
            style={{ objectFit: "contain", maxHeight: 60 }}
          />
          <Image
            src="/assets/logos/tsjBco.png"
            alt="Tecnológico Superior de Jalisco"
            width={180}
            height={60}
            style={{ objectFit: "contain", maxHeight: 60 }}
          />
          <Image
            src="/assets/logos/jaliscoBco.png"
            alt="Jalisco Gobierno del Estado"
            width={180}
            height={60}
            style={{ objectFit: "contain", maxHeight: 60 }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            alignItems: "center",
            justifyItems: "center",
            gap: "2rem",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <Image
            src="/assets/logos/educacionBco.png"
            alt="Secretaría de Educación Pública"
            width={180}
            height={60}
            style={{ objectFit: "contain", maxHeight: 60 }}
          />
          <Image
            src="/assets/logos/tecnmBco.png"
            alt="Tecnológico Nacional de México"
            width={180}
            height={60}
            style={{ objectFit: "contain", maxHeight: 60 }}
          />
        </div>
      </div>

      <div
        style={{
          background: "#f7f7f7",
          borderTop: "1px solid #e5e5e5",
          padding: "1.25rem 2rem",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            color: "#666",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontFamily: "var(--font-madani-regular)" }}>
            © {year} {institutionName}. Todos los derechos reservados.
          </span>
          <span style={{ color: "#ccc" }}>|</span>
          {links.map((link, i) => (
            <span
              key={link.id}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <a
                href={link.href}
                style={{
                  color: "#555",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-madani-regular)",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.textDecoration =
                    "underline")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.textDecoration =
                    "none")
                }
              >
                {link.label}
              </a>
              {i < links.length - 1 && <span style={{ color: "#ccc" }}>·</span>}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
