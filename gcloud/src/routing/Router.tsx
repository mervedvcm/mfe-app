import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from '@mui/material/styles';

const browserRouter = createBrowserRouter(routes);
const defaultTheme = createTheme({
  typography: {
    "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`,
  }
});

export function Router() {
  return (
    <StyledEngineProvider injectFirst>
     <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <RouterProvider router={browserRouter} />
      </Provider>
     </ThemeProvider>
    </StyledEngineProvider>
  );
}
