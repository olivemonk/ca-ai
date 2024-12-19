/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: ${theme.colors.background};
            `}
        >
            {children}
        </div>
    );
};

export default AuthLayout;
