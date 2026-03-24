"use client";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Container } from "@mui/material";

import { questions } from "@/app/(site)/encuestapromocion/questions";
import { Hero } from "@/packages/shared/common";
import QuestionCard from "@/packages/shared/common/questioncard/Questioncard";

export default function Page() {
  return (
    <>
      <Hero
        title="¡Tu opinión es clave!"
        subtitle="Queremos saber qué te trajo al TSJ. Tu experiencia nos ayuda a crear el futuro de nuestra comunidad universitaria. Participa y sé parte del cambio."
        image="/assets/resources/encuest-prom.jpg"
      />

      <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
        <Box sx={{ mt: 6 }}>
          {questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={i}
              total={questions.length}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            backgroundColor: "#373A3A",
            alignItems: "center",
            mx: "auto",
            mt: 2,
            mb: 4,
            px: 6,
            borderRadius: "12px",
          }}
        >
          Finalizar y Enviar
          <SendIcon sx={{ ml: 1 }} />
        </Button>
      </Container>
    </>
  );
}
