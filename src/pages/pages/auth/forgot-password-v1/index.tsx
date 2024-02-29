// ** React Imports
import { ReactNode } from "react";

// ** Link Import
import { Link } from "react-router-dom";

// ** MUI Components
import type { CardProps, FormControlLabelProps } from "@components/material.js";
import {
  Box,
  Button,
  CardContent,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  Card as MuiCard,
  FormControlLabel as MuiFormControlLabel,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@components/material.js";



// ** Configs
import { config as themeConfig } from "@config/theme.js";


// ** Demo Imports
import { ChevronLeft } from "@nxweb/icons/tabler";
import AuthIllustrationV1Wrapper from "@src/views/pages/auth/AuthIllustrationV1Wrapper.js";

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "25rem" },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  justifyContent: "center",
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize,
}));

const ForgotPasswordV1 = () => {
  // ** Hook
  const theme = useTheme();

  return (
    <Box className="content-center">
      <AuthIllustrationV1Wrapper>
        <Card>
          <CardContent
            sx={{ p: (theme) => `${theme.spacing(10.5, 8, 8)} !important` }}
          >
            <Box
              sx={{
                mb: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width={34}
                viewBox="0 0 32 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={theme.palette.primary.main}
                  d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                />
                <path
                  fill="#161616"
                  opacity={0.06}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                />
                <path
                  fill="#161616"
                  opacity={0.06}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={theme.palette.primary.main}
                  d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                />
              </svg>
              <Typography variant="h3" sx={{ ml: 2.5, fontWeight: 700 }}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 1.5 }}>
                Forgot Password? 🔒
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Enter your email and we&prime;ll send you instructions to reset
                your password
              </Typography>
            </Box>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                autoFocus
                fullWidth
                type="email"
                label="Email"
                sx={{ display: "flex", mb: 4 }}
                placeholder="john.doe@gmail.com"
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mb: 4 }}
              >
                Send reset link
              </Button>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": { mr: 1 },
                }}
              >
                <LinkStyled to="/pages/auth/login-v1">
                  <ChevronLeft/>
                  <span>Back to login</span>
                </LinkStyled>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationV1Wrapper>
    </Box>
  );
};

ForgotPasswordV1.layout = "blank";

export default ForgotPasswordV1;