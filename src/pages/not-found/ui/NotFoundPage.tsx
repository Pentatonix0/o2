import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageFrame from "@/shared/ui/page-frame/PageFrame";

function NotFoundPage() {
  return (
    <PageFrame
      eyebrow="404"
      title="Страница потерялась"
      subtitle="Для такой ситуации даже есть отдельный экран, просто маршрутизация редко дает ему шанс."
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          border: "1px solid rgba(91, 74, 61, 0.12)",
        }}
      >
        <Stack spacing={2}>
          <Typography color="text.secondary">
            Возможно, вы пришли по несуществующей ссылке.
          </Typography>
          <Button component="a" href="/" variant="contained" color="secondary">
            На главную
          </Button>
        </Stack>
      </Paper>
    </PageFrame>
  );
}

export default NotFoundPage;
