import React from "react";
import { ThemeProvider } from "./utils/theme/theme";
import { Intro } from "./pages/intro";

function App() {
    return (
        <ThemeProvider>
            <Intro />
        </ThemeProvider>
    );
}

export default App;
