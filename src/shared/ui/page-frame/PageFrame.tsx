import type { ReactNode } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface PageFrameProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}

function PageFrame({
  eyebrow,
  title,
  subtitle,
  children,
}: PageFrameProps) {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          mb: 3,
          border: "1px solid rgba(91, 74, 61, 0.12)",
          background:
            "linear-gradient(140deg, rgba(255, 245, 230, 0.92), rgba(255, 251, 245, 0.97))",
          backdropFilter: "blur(8px)",
        }}
      >
        <Stack spacing={1}>
          {eyebrow ? (
            <Typography color="secondary" fontWeight={700}>
              {eyebrow}
            </Typography>
          ) : null}
          <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 56 } }}>
            {title}
          </Typography>
          {subtitle ? (
            <Typography color="text.secondary" maxWidth={760}>
              {subtitle}
            </Typography>
          ) : null}
        </Stack>
      </Paper>
      {children}
    </Container>
  );
}

export default PageFrame;
