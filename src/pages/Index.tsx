import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* App content */}
    </ThemeProvider>
  );
};

export default Index;