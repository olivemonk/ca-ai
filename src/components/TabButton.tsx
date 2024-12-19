/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";

interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    label: string;
    borderRadius?: string;
}

const TabButton: React.FC<TabButtonProps> = ({
    active,
    onClick,
    label,
    borderRadius,
}) => {
    return (
        <button
            css={css`
                flex: 1;
                background-color: ${active
                    ? theme.colors.blue
                    : theme.colors.background};
                color: ${active
                    ? theme.colors.white
                    : theme.colors.textTertiary};
                font-weight: 600;
                border: none;
                border-radius: ${borderRadius || "0"};
                padding: ${theme.spacing(2)};
                cursor: pointer;
                font-size: 1rem;
                text-align: center;

                &:hover {
                    opacity: 0.9;
                }
            `}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default TabButton;
