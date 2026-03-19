"use client";

import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

import CarreraCard from "@/packages/components/home/carrerascard/carrerascard";
import PreguntasCard from "@/packages/components/home/preguntascard/preguntascard";
import InfoCard from "@/packages/shared/common/card/Genericcard";

export default function Page() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src="/assets/school.jpg"
          alt="Imagen principal"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "90vh", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 3,
            color: "white",
          }}
        >
          <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
            <Typography variant="h2" fontWeight="bold" mb={2}>
              Admisiones 2026
            </Typography>
            <Typography variant="body1" mb={4} sx={{ maxWidth: 500 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="/admision"
              sx={{
                backgroundColor: "white",
                color: "black",
                width: "fit-content",
                "&:hover": { backgroundColor: "grey.200" },
              }}
            >
              Registrarse como Aspirante
            </Button>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
        <Box sx={{ py: 8 }}>
          <Typography variant="h3" fontWeight="bold" mb={2} textAlign="center">
            Convocatoria 2026
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
          >
            Sigue los pasos de nuestro proceso institucional para completar tu
            admisión.
          </Typography>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<HowToRegOutlinedIcon />}
                title="1. Registro Online"
                date="Octubre 1 - Noviembre 15"
                text="Crea tu cuenta en el portal de aspirantes y sube tu documentación oficial digitalizada en formato PDF."
                iconVariant="left-square"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<FactCheckOutlinedIcon />}
                title="2. Examen de Admisión."
                date="Noviembre 20 - Diciembre 5"
                text="Realiza el examen de admisión en línea desde cualquier dispositivo en la fecha asignada."
                iconVariant="left-square"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<CampaignOutlinedIcon />}
                title="3. Resultados."
                date="Enero 10 - Febrero 1"
                text="Una vez aceptado, completa tu inscripción y prepárate para iniciar tu vida universitaria."
                iconVariant="left-square"
              />
            </Grid>
          </Grid>
        </Box>

        <PreguntasCard />

        <Box sx={{ py: 4, pb: 2 }}>
          <Typography variant="h3" fontWeight="bold" mb={2} textAlign="center">
            Oferta educativa
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: 700, mx: "auto", mb: 8 }}
          >
            Conoce todos los programas educativos que tenemos disponibles para
            ti.
          </Typography>

          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <SchoolOutlinedIcon />
              Carreras presenciales
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Licenciatura en Gastronomía"
                  text="Forma parte de la nueva generación de profesionales de la salud."
                  modalidad="Presencial"
                  turno="Matutino / Vespertino"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "presencial-0"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "presencial-0" : null)
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Arquitectura"
                  text="Defiende la justicia y el estado de derecho."
                  modalidad="Presencial"
                  turno="Matutino"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "presencial-1"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "presencial-1" : null)
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Licenciatura en Administración"
                  text="Diseña los espacios del futuro."
                  modalidad="Presencial"
                  turno="Matutino"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "presencial-2"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "presencial-2" : null)
                  }
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <ComputerOutlinedIcon />
              Carreras en línea
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Ingeniería en Software"
                  text="Desarrolla soluciones tecnológicas de vanguardia.Desarrolla soluciones tecnológicas de vanguardia.Desarrolla soluciones tecnológicas de vanguardia."
                  modalidad="En línea"
                  turno="Flexible"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "linea-0"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "linea-0" : null)
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Diseño Digital"
                  text="Crea experiencias visuales para el mundo digital."
                  modalidad="En línea"
                  turno="Flexible"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "linea-1"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "linea-1" : null)
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Administración de Empresas"
                  text="Gestiona organizaciones con visión global.Gestiona organizaciones con visión global.Gestiona organizaciones "
                  modalidad="En línea"
                  turno="Flexible"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "linea-2"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "linea-2" : null)
                  }
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <WorkspacePremiumOutlinedIcon />
              Maestrías
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Maestría en Tecnología Educativa"
                  text="Transforma la educación con herramientas digitales."
                  modalidad="En línea"
                  turno="Flexible"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "maestria-0"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "maestria-0" : null)
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Maestría en Administración"
                  text="Lleva tu carrera profesional al siguiente nivel."
                  modalidad="Presencial"
                  turno="Vespertino"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "maestria-1"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "maestria-1" : null)
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CarreraCard
                  title="Maestría en Derecho Corporativooo"
                  text="Especialízate en el ámbito jurídico empresarial. Especialízate en el ámbito jurídico empresarial.
                  Especialízate en el ámbito jurídico empresarial."
                  modalidad="Presencial"
                  turno="Vespertino"
                  unidades={["Unidad 1", "Unidad 2", "Unidad 3"]}
                  expanded={openCard === "maestria-2"}
                  onExpandChange={(_, isExpanded) =>
                    setOpenCard(isExpanded ? "maestria-2" : null)
                  }
                />
              </Grid>
            </Grid>

            <PreguntasCard
              title="Preguntas sobre nuestras carreras"
              faqs={[
                {
                  question: "¿PUEDO CAMBIAR DE CARRERA UNA VEZ INSCRITO?",
                  answer:
                    "Sí, existe un proceso de cambio de carrera sujeto a disponibilidad de lugares y requisitos académicos.Sí, existe un proceso de cambio de carrera sujeto a disponibilidad de lugares y requisitos académicos.Sí, existe un proceso de cambio de carrera sujeto a disponibilidad de lugares y requisitos académicos.",
                },
                {
                  question:
                    "¿LAS CARRERAS EN LÍNEA TIENEN EL MISMO VALOR QUE LAS PRESENCIALES?",
                  answer:
                    "Sí, todos nuestros programas están reconocidos oficialmente y tienen el mismo valor curricular.",
                },
                {
                  question:
                    "¿QUÉ REQUISITOS NECESITO PARA INSCRIBIRME A UNA MAESTRÍA?",
                  answer:
                    "Se requiere título de licenciatura, carta de motivos, y en algunos casos examen de admisión específico.",
                },
                {
                  question: "¿LAS MAESTRÍAS TIENEN BECA?",
                  answer:
                    "Contamos con programas de beca parcial y total según perfil socioeconómico y rendimiento académico.",
                },
              ]}
            />
          </Box>
        </Box>

        <Box sx={{ py: 8, pt: 2 }}>
          <Typography variant="h3" fontWeight="bold" mb={2} textAlign="center">
            ¿Tienes dudas? Contáctanos
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: 600, mx: "auto", mb: 6 }}
          >
            Estamos aquí para ayudarte en cada paso de tu proceso. Elige el
            medio que prefieras y nuestro equipo de admisiones te atenderá a la
            brevedad.
          </Typography>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<LocalPhoneOutlinedIcon />}
                title="Llámanos"
                text="Atención telefónica de lunes a viernes de 9:00 a 18:00 hrs."
                actionLabel="+52 (55) 1234-5678"
                actionHref="tel:+52551234567"
                iconVariant="center-circle-link"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<WhatsAppIcon />}
                title="WhatsApp"
                text="Envíanos un mensaje rápido para respuestas instantáneas."
                actionLabel="Chatear ahora"
                actionHref="https://wa.me/52551234567"
                iconVariant="center-circle-link"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<EmailOutlinedIcon />}
                title="Email"
                text="Escríbenos para dudas detalladas sobre planes de estudio."
                actionLabel="admisiones@universidad.edu"
                actionHref="mailto:admisiones@universidad.edu"
                iconVariant="center-circle-link"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
