import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export interface CarreraCardProps {
  title: string;
  text: string;
  modalidad: "Presencial" | "En línea";
  turno: string;
  unidades?: string[];
  expanded?: boolean;
  onExpandChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
}

export default function CarreraCard({
  title,
  text,
  modalidad,
  turno,
  unidades = [],
  expanded = false,
  onExpandChange,
}: CarreraCardProps) {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, width: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {text}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          <Chip
            label={modalidad}
            size="small"
            sx={
              modalidad === "En línea"
                ? {
                    backgroundColor: "rgba(82, 195, 255, 0.2)",
                    color: "#0a7abf",
                    fontWeight: "bold",
                    border: "none",
                  }
                : {
                    backgroundColor: "rgba(255, 161, 163, 0.25)",
                    color: "#bf2a2d",
                    fontWeight: "bold",
                    border: "none",
                  }
            }
          />
          {turno !== "Flexible" && (
            <Chip
              label={turno}
              size="small"
              sx={{
                backgroundColor: "rgba(255, 211, 88, 0.25)",
                color: "#996600",
                fontWeight: "bold",
                border: "none",
              }}
            />
          )}
        </Box>
        <Divider sx={{ mb: 1 }} />
        <Accordion
          expanded={expanded}
          onChange={onExpandChange}
          disableGutters
          sx={{
            boxShadow: "none",
            "&:before": { display: "none" },
            "& .MuiAccordion-root": { margin: 0 },
            "&.MuiPaper-root": { margin: 0 },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
            <Typography variant="subtitle2" fontWeight="bold">
              Detalles
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0 }}>
            {unidades.length > 0 && (
              <>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  color="text.secondary"
                  sx={{ textTransform: "uppercase" }}
                >
                  Unidades académicas
                </Typography>
                <List dense disablePadding sx={{ mb: 2 }}>
                  {unidades.map((unidad) => (
                    <ListItem key={unidad} disablePadding>
                      <ListItemText
                        primary={`• ${unidad}`}
                        primaryTypographyProps={{
                          variant: "body2",
                          color: "text.secondary",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}
            >
              <DownloadOutlinedIcon fontSize="small" color="primary" />
              <Typography
                variant="body2"
                color="primary"
                sx={{ cursor: "pointer", textDecoration: "underline" }}
              >
                Descargar plan de estudios (PDF)
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
