"use client";
import {
  CampaignOutlined,
  ComputerOutlined,
  EmailOutlined,
  FactCheckOutlined,
  HowToRegOutlined,
  LocalPhoneOutlined,
  SchoolOutlined,
  WhatsApp,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import CarreraCarousel from "@/packages/components/home/carrerascarrousel/Carrerascarrousel";
import CategoryTabs from "@/packages/components/home/categorytab/categorytab";
import PreguntasCard from "@/packages/components/home/preguntascard/preguntascard";
import InfoCard from "@/packages/shared/common/card/Genericcard";
import Hero from "@/packages/shared/common/hero/Hero";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Todos");

  const carrerasPresenciales = [
    {
      title: "Licenciatura en Gastronomía",
      text: "Forma parte de la nueva generación de profesionales de la salud forma parte de la nueva",
      modalidad: "Presencial" as const,
      turno: "Matutino / Vespertino",
      unidades: [
        "Arandas",
        "Zapopan",
        "Puerto Vallarta",
        "Tomatlán",
        "Chapala",
      ],
      image: "/assets/resources/lic-gastronomia.webp",
    },
    {
      title: "Ingeniería en Sistemas Computacionales",
      text: "Defiende la justicia y el estado de derecho.",
      modalidad: "Presencial" as const,
      turno: "Matutino/Vespertino",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-sist-computacionales.png",
    },
    {
      title: "Ingeniería Industrial",
      text: "Diseña los espacios del futuro.",
      modalidad: "Presencial" as const,
      turno: "Matutino/Vespertino",
      unidades: ["Arandas", "Zapopan", "Puerto Vallarta", "Tomatlán"],
      image: "/assets/resources/ing-industrial.avif",
    },
    {
      title: "Ingeniería Industrial",
      text: "Diseña los espacios del futuro.",
      modalidad: "Presencial" as const,
      turno: "Matutino/Vespertino",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-industrial.avif",
    },
    {
      title: "Ingeniería Industrial",
      text: "Diseña los espacios del futuro.",
      modalidad: "Presencial" as const,
      turno: "Matutino/Vespertino",
      unidades: ["Puerto Vallarta", "Arandas", "Zapopan", "Tomatlán"],
      image: "/assets/resources/ing-industrial.avif",
    },
    {
      title: "Ingeniería Industrial",
      text: "Diseña los espacios del futuro.",
      modalidad: "Presencial" as const,
      turno: "Matutino/Vespertino",
      unidades: ["Puerto Vallarta", "Arandas", "Zapopan", "Tomatlán"],
      image: "/assets/resources/ing-industrial.avif",
    },
  ];

  const carrerasEnLinea = [
    {
      title: "Ingeniería en Sistemas Computacionales",
      text: "Desarrolla soluciones tecnológicas de vanguardia.",
      modalidad: "En línea" as const,
      turno: "Flexible",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-sist-computacionales.png",
    },
    {
      title: "Ingeniería en Gestión Empresarial",
      text: "Crea experiencias visuales para el mundo digital.",
      modalidad: "En línea" as const,
      turno: "Flexible",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/lic-gestion-empresarial.png",
    },
    {
      title: "Ingeniería Industrial",
      text: "Gestiona organizaciones con visión global.",
      modalidad: "En línea" as const,
      turno: "Flexible",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-industrial.avif",
    },
    {
      title: "Ingeniería Industrial",
      text: "Gestiona organizaciones con visión global.",
      modalidad: "En línea" as const,
      turno: "Flexible",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-industrial.avif",
    },
    {
      title: "Ingeniería Industrial",
      text: "Gestiona organizaciones con visión global.",
      modalidad: "En línea" as const,
      turno: "Flexible",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-industrial.avif",
    },
    {
      title: "Ingeniería Industrial",
      text: "Gestiona organizaciones con visión global.",
      modalidad: "En línea" as const,
      turno: "Flexible",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-industrial.avif",
    },
  ];

  const maestrias = [
    {
      title: "Maestría en Ingeniería Electrónica",
      text: "Transforma la educación con herramientas digitales.",
      modalidad: "En línea" as const,
      turno: "Flexible",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-electronica.jpg",
    },
    {
      title: "Maestría en Administración",
      text: "Lleva tu carrera profesional al siguiente nivel.",
      modalidad: "Presencial" as const,
      turno: "Vespertino",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/maestria-admin.jpg",
    },
    {
      title: "Maestría en Sistemas Computacionales",
      text: "Especialízate en el ámbito jurídico empresarial.",
      modalidad: "Presencial" as const,
      turno: "Matutino / Vespertino",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-sist-computacionales.png",
    },
    {
      title: "Maestría en Sistemas Computacionales",
      text: "Especialízate en el ámbito jurídico empresarial.",
      modalidad: "Presencial" as const,
      turno: "Matutino / Vespertino",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-sist-computacionales.png",
    },
    {
      title: "Maestría en Sistemas Computacionales",
      text: "Especialízate en el ámbito jurídico empresarial.",
      modalidad: "Presencial" as const,
      turno: "Matutino / Vespertino",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-sist-computacionales.png",
    },
    {
      title: "Maestría en Sistemas Computacionales",
      text: "Especialízate en el ámbito jurídico empresarial.",
      modalidad: "Presencial" as const,
      turno: "Matutino / Vespertino",
      unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
      image: "/assets/resources/ing-sist-computacionales.png",
    },
  ];

  return (
    <div>
      <Hero
        title="Admisiones 2026"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.."
        image="/assets/resources/school.jpg"
        chipLabel="Convocatoria abierta"
        buttonText="Registrarse como Aspirante"
        buttonHref="/admision"
      />

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
                icon={<HowToRegOutlined />}
                title="1. Registro Online"
                date="Octubre 1 - Noviembre 15"
                text="Crea tu cuenta en el portal de aspirantes y sube tu documentación oficial digitalizada en formato PDF."
                iconVariant="left-square"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<FactCheckOutlined />}
                title="2. Examen de Admisión."
                date="Noviembre 20 - Diciembre 5"
                text="Realiza el examen de admisión en línea desde cualquier dispositivo en la fecha asignada."
                iconVariant="left-square"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<CampaignOutlined />}
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
          <CategoryTabs activeTab={activeTab} onChange={setActiveTab} />

          {(activeTab === "Todos" || activeTab === "Presenciales") && (
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <SchoolOutlined />
                Carreras presenciales
              </Typography>
              <CarreraCarousel cards={carrerasPresenciales} />
            </Box>
          )}

          {(activeTab === "Todos" || activeTab === "En Línea") && (
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <ComputerOutlined />
                Carreras en línea
              </Typography>
              <CarreraCarousel cards={carrerasEnLinea} />
            </Box>
          )}

          {(activeTab === "Todos" || activeTab === "Maestrías") && (
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <WorkspacePremiumOutlined />
                Maestrías
              </Typography>
              <CarreraCarousel cards={maestrias} />

              <PreguntasCard
                title="Preguntas sobre nuestras carreras"
                faqs={[
                  {
                    question: "¿PUEDO CAMBIAR DE CARRERA UNA VEZ INSCRITO?",
                    answer:
                      "Sí, existe un proceso de cambio de carrera sujeto a disponibilidad de lugares y requisitos académicos.",
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
          )}
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
                icon={<LocalPhoneOutlined />}
                title="Llámanos"
                text="Atención telefónica de lunes a viernes de 9:00 a 18:00 hrs."
                actionLabel="+52 (55) 1234-5678"
                actionHref="tel:+52551234567"
                iconVariant="center-circle-link"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<WhatsApp />}
                title="WhatsApp"
                text="Envíanos un mensaje rápido para respuestas instantáneas."
                actionLabel="Chatear ahora"
                actionHref="https://wa.me/52551234567"
                iconVariant="center-circle-link"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                icon={<EmailOutlined />}
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
