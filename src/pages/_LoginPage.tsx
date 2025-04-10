import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import { SignInForm } from "src/components/Forms/SignInForm";
// import PromotionBanner from 'src/components/Banner/PromotionBanner'
const LoginPage: React.FC = () => {
  console.log("Environment variables:", {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  });
  return (
    <Container
      component={"main"}
      sx={{
        minHeight: "100vh",
        width: "100vw",
        textAlign: "center",
        fontFamily: "Raleway, sans-serif",
        backgroundImage: 'url("/images/DSC_2781.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LoginWrapperStyled>
        <SignInForm onSubmit={() => {}} />
      </LoginWrapperStyled>
    </Container>
  );
};

const LoginWrapperStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

export default LoginPage;
