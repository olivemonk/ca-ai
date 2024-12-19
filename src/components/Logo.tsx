/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import CodeAntLogo from "../assets/codeant.svg";
import { theme } from "../styles/theme";

interface LogoProps {
    width?: string;
    height?: string;
}

const Logo: React.FC<LogoProps> = ({ width = "200px", height = "auto" }) => {
    return (
        <div
            css={css`
                display: flex;
                align-items: center;
                justify-content: center;
            `}
        >
            <img
                src={CodeAntLogo}
                alt="codeant-ai-logo"
                css={css`
                    width: ${width};
                    height: ${height};
                `}
            />
            <span
                css={css`
                    margin-left: 10px;
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: ${theme.colors.textPrimary};
                `}
            >
                CodeAnt AI
            </span>
            `
        </div>
    );
};

export default Logo;
