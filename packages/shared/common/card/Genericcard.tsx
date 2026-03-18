import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import type { ReactNode } from "react";

type IconVariant = "left-square" | "center-circle" | "center-circle-link";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  date?: string;
  iconVariant?: IconVariant;
  actionLabel?: string;
  actionHref?: string;
}

export default function InfoCard({
  icon,
  title,
  text,
  date,
  iconVariant = "center-circle",
  actionLabel,
  actionHref,
}: InfoCardProps) {
  const isCenter = iconVariant !== "left-square";

  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        p: 1,
        height: "100%",
        width: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: isCenter ? "center" : "flex-start",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: isCenter ? "50%" : "8px",
              backgroundColor: "grey.100",
              color: "text.primary",
            }}
          >
            {icon}
          </Box>
        </Box>

        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign={isCenter ? "center" : "left"}
          mb={0.5}
        >
          {title}
        </Typography>

        {date && (
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            textAlign={isCenter ? "center" : "left"}
            mb={1}
          >
            {date}
          </Typography>
        )}

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={isCenter ? "center" : "left"}
          mb={actionLabel ? 1.5 : 0}
        >
          {text}
        </Typography>

        {actionLabel && actionHref && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href={actionHref}
              underline="none"
              sx={{
                fontWeight: "bold",
                fontSize: "0.875rem",
                color: "text.primary",
              }}
            >
              {actionLabel}
            </Link>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
