/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { LucideIcon } from "lucide-react";
import { theme } from "../styles/theme";

interface ButtonProps {
    text: string;
    icon?: LucideIcon | string;
    iconType?: "lucide" | "svg";
    iconSize?: number;
    iconColor?: string;
    styleOverride?: React.CSSProperties;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    icon,
    iconType = "lucide",
    iconSize = 20,
    iconColor = "#fff",
    styleOverride,
    onClick,
}) => {
    return (
        <button
            css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                gap: ${theme.spacing(1)};
                width: 100%;
                padding: ${theme.spacing(2)};
                background-color: ${theme.colors.white};
                color: ${theme.colors.textSecondary};
                border: 1px solid ${theme.colors.buttonBorder};
                border-radius: ${theme.borderRadius};
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.3s ease-in-out;

                &:hover {
                    background-color: ${theme.colors.background};
                }

                ${theme.mediaQueries.mobile} {
                    font-size: 0.875rem;
                    padding: ${theme.spacing(1.5)};
                }
            `}
            style={styleOverride}
            onClick={onClick}
        >
            {icon &&
                iconType === "lucide" &&
                React.createElement(icon as LucideIcon, {
                    size: iconSize,
                    color: iconColor,
                })}

            {icon && iconType === "svg" && (
                <img
                    src={icon as string}
                    alt={`${text} icon`}
                    css={css`
                        width: ${iconSize}px;
                        height: ${iconSize}px;
                    `}
                />
            )}

            {text}
        </button>
    );
};

export default Button;
