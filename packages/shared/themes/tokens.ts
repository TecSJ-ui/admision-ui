export const colors = {
    primary: "#1A1A2E",
    secondary: "#4A6FA5",
    accent: "#E8C547",
} as const;

export type ColorKey = keyof typeof colors;