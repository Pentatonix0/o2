import type { CSSProperties } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { selectCartSummary } from "@/entities/cart/model/selectors";
import { selectFavoritesCount } from "@/entities/favorites/model/selectors";
import { roadBook } from "@/shared/config/routes";
import { useAppSelector } from "@/shared/lib/storeHooks";

const navLinkStyle: CSSProperties = {
  color: "inherit",
  textDecoration: "none",
  fontWeight: 700,
  opacity: 0.82,
};

function Header() {
  const summary = useAppSelector(selectCartSummary);
  const favoritesCount = useAppSelector(selectFavoritesCount);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(91, 74, 61, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 80 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <RouterLink to={roadBook.home} style={{ color: "inherit", textDecoration: "none" }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <StorefrontOutlinedIcon color="secondary" />
                <Box>
                  <Typography fontWeight={800}>Стулья</Typography>
                  <Typography variant="body2" color="text.secondary">
                    и не только...
                  </Typography>
                </Box>
              </Stack>
            </RouterLink>

            <Stack direction="row" spacing={3} alignItems="center">
              <RouterLink to={roadBook.catalog} style={navLinkStyle}>
                Каталог
              </RouterLink>
              <RouterLink to={roadBook.catalog} style={navLinkStyle}>
                Подборки
              </RouterLink>
              <RouterLink to={roadBook.favorites} style={navLinkStyle}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Badge
                    badgeContent={favoritesCount}
                    color="secondary"
                    showZero
                    sx={{
                      "& .MuiBadge-badge": {
                        fontWeight: 800,
                      },
                    }}
                  >
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  </Badge>
                  <span>Избранное</span>
                </Stack>
              </RouterLink>
              <RouterLink to={roadBook.cart} style={navLinkStyle}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Badge
                    badgeContent={summary.qty}
                    color="secondary"
                    showZero
                    sx={{
                      "& .MuiBadge-badge": {
                        fontWeight: 800,
                      },
                    }}
                  >
                    <ShoppingCartOutlinedIcon fontSize="small" />
                  </Badge>
                  <span>Корзина</span>
                </Stack>
              </RouterLink>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
