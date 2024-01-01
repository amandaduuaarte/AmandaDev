import React, { createContext, useState } from "react";

import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { PrimaryTheme } from "./primary";
import { SecondaryTheme } from "./secondary";
import { ChildrenDefaultProps } from "../../models/children";

// eslint-disable-next-line no-shadow
export enum ThemeType {
    primary = "primary",
    secondary = "secondary",
}

const themes = {
    primary: PrimaryTheme,
    secondary: SecondaryTheme,
};

export const ThemeContext = createContext({
    theme: ThemeType.primary,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FunctionComponent<ChildrenDefaultProps> = ({
    children,
}) => {
    const [theme, setTheme] = useState(ThemeType.primary);

    function toggleTheme() {
        if (theme === ThemeType.primary) {
            setTheme(ThemeType.secondary);
        } else {
            setTheme(ThemeType.primary);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProviderStyled theme={themes[theme]}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    );
};
