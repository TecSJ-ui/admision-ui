"use client";

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
    year = 2024,
    institutionName = "Institución Educativa",
    links = [
        { id: "ayuda", label: "Ayuda", href: "#" },
        { id: "contacto", label: "Contacto", href: "#" },
        { id: "privacidad", label: "Privacidad", href: "#" },
    ],
}: FooterProps) {
    return (
        <footer
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
                    <span key={link.id} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <a
                            href={link.href}
                            style={{
                                color: "#555",
                                textDecoration: "none",
                                fontSize: "0.8rem",
                                fontFamily: "var(--font-madani-regular)"
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLAnchorElement).style.textDecoration = "underline")
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLAnchorElement).style.textDecoration = "none")
                            }
                        >
                            {link.label}
                        </a>
                        {i < links.length - 1 && (
                            <span style={{ color: "#ccc" }}>·</span>
                        )}
                    </span>
                ))}
            </p>
        </footer>
    );
}