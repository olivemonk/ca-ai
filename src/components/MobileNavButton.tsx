/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import { LucideIcon } from "lucide-react";
import React from "react";

type MobileNavButtonProps = {
    label: string;
    href: string;
    icon: LucideIcon;
    isActive?: boolean;
    border?: boolean;
    iconSize?: number;
};

const MobileNavButton: React.FC<MobileNavButtonProps> = ({
    label,
    href,
    icon,
    isActive = false,
    border = false,
    iconSize = 20,
}) => {
    return (
        <a
            href={href}
            css={css`
                display: flex;
                align-items: center;
                gap: ${theme.spacing(2)};
                justify-content: flex-start;
                text-decoration: none;
                color: ${isActive ? theme.colors.primary : "inherit"};
                background-color: ${isActive
                    ? theme.colors.blue
                    : "transparent"};
                border: ${border
                    ? `1px solid ${theme.colors.buttonBorderGray}`
                    : "none"};
                color: ${isActive ? theme.colors.white : theme.colors.text};
                padding: 8px 12px;
                border-radius: ${theme.borderRadius};
                white-space: nowrap;
                width: 100%;

                &:hover {
                    background-color: ${isActive
                        ? theme.colors.primaryDark
                        : theme.colors.background};
                }
            `}
        >
            {React.createElement(icon, { size: iconSize })}
            <span>{label}</span>
        </a>
    );
};

export default MobileNavButton;
