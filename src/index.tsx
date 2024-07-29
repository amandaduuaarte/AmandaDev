import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyled } from "./layout/style/globalStyle";
import { ThemeProvider } from "./utils/theme/theme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <GlobalStyled />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
