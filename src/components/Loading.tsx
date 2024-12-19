/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: ${theme.colors.background};
                color: ${theme.colors.text};
            `}
        >
            <motion.div
                css={css`
                    width: 60px;
                    height: 60px;
                    border: 6px solid ${theme.colors.gray};
                    border-top: 6px solid ${theme.colors.primary};
                    border-radius: 50%;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                `}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default Loading;
