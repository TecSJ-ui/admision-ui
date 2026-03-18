import { Footer, RegisterForm, Hero } from "@/packages/shared/common";

export default function Admision() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "calc(100vh - 60px)",
            }}
        >
            <main
                style={{
                    flex: 1,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    overflow: "hidden",
                }}
            >
                <Hero />
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        padding: "2rem",
                        marginRight: "4rem",
                    }}
                >
                    <RegisterForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}