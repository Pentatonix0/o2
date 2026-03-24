import Box from "@mui/material/Box";
import AppRouter from "@/app/providers/router/ui/AppRouter";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(251, 192, 45, 0.22), transparent 35%), linear-gradient(180deg, #f7f1e8 0%, #fffdf9 45%, #f3ece1 100%)",
      }}
    >
      <AppRouter />
    </Box>
  );
}

export default App;
