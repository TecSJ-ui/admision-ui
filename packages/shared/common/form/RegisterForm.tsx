"use client";

import React, { useState } from "react";

interface RegisterFormProps {
    onSubmit?: (data: {
        curp: string;
        nombreCompleto: string;
        correo: string;
        celular: string;
    }) => void;
    onCurpSearch?: (curp: string) => void;
}

export default function RegisterForm({
    onSubmit,
    onCurpSearch,
}: RegisterFormProps) {
    const [curp, setCurp] = useState("");
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit?.({ curp, nombreCompleto, correo, celular });
    };

    const handleCurpSearch = () => {
        onCurpSearch?.(curp);
    };

    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem 2rem",
                width: "100%",
                maxWidth: "380px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            }}
        >
            {/* Title */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.3rem" }}>🧑‍🎓</span>
                <h2
                    style={{
                        margin: 0,
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#111",
                    }}
                >
                    Nuevo Aspirante
                </h2>
            </div>

            {/* CURP */}
            <div style={{ marginBottom: "1rem" }}>
                <label
                    style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "#333",
                        marginBottom: "0.4rem",
                    }}
                >
                    CURP
                </label>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                        type="text"
                        value={curp}
                        onChange={(e) => setCurp(e.target.value.toUpperCase())}
                        placeholder="AAAA000000XXXXXX00"
                        maxLength={18}
                        style={inputStyle}
                    />
                    <button
                        onClick={handleCurpSearch}
                        style={{
                            background: "#111",
                            border: "none",
                            borderRadius: "6px",
                            width: "40px",
                            minWidth: "40px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: "1rem",
                        }}
                        title="Buscar CURP"
                    >
                        🔍
                    </button>
                </div>
            </div>

            {/* Nombre completo */}
            <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Nombre completo</label>
                <input
                    type="text"
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                    placeholder="Nombre(s) Apellido Paterno Apellido Materno"
                    style={inputStyle}
                />
            </div>

            {/* Correo Electrónico */}
            <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Correo Electrónico</label>
                <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    style={inputStyle}
                />
            </div>

            {/* Número de Celular */}
            <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Número de Celular</label>
                <input
                    type="tel"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    placeholder="55 1234 5678"
                    style={inputStyle}
                />
            </div>

            {/* Submit */}
            <button
                onClick={handleSubmit}
                style={{
                    width: "100%",
                    padding: "0.85rem",
                    background: "#111",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.background = "#333")
                }
                onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.background = "#111")
                }
            >
                Registrarte
            </button>

            {/* Legal */}
            <p
                style={{
                    marginTop: "1rem",
                    fontSize: "0.72rem",
                    color: "#888",
                    textAlign: "center",
                    lineHeight: 1.5,
                }}
            >
                Al hacer clic en &quot;Registrarte&quot;, aceptas nuestros{" "}
                <a href="#" style={{ color: "#111", fontWeight: 600 }}>
                    Términos y Condiciones
                </a>{" "}
                y nuestra{" "}
                <a href="#" style={{ color: "#111", fontWeight: 600 }}>
                    Política de Privacidad
                </a>
                .
            </p>
        </div>
    );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.6rem 0.75rem",
    border: "none",
    borderRadius: "6px",
    background: "#f0f0f0",
    fontSize: "0.875rem",
    color: "#333",
    outline: "none",
    boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#333",
    marginBottom: "0.4rem",
};