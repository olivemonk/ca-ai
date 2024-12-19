/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import Logo from "../components/Logo";

const ErrorPage: React.FC = () => {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: center;
                background-color: ${theme.colors.background};
                color: ${theme.colors.text};
            `}
        >
           <Logo height="30px" width="30px" />

            <h1
                css={css`
                    font-size: 3rem;
                    margin-top: ${theme.spacing(4)};
                    color: ${theme.colors.blue};
                `}
            >
                404
            </h1>

            <p
                css={css`
                    font-size: 1.5rem;
                    margin: ${theme.spacing(2)} 0;
                    color: ${theme.colors.gray};
                `}
            >
                Oops! The page you're looking for doesn't exist.
            </p>
            <a
                href="/"
                css={css`
                    margin-top: ${theme.spacing(2)};
                    padding: ${theme.spacing(2)} ${theme.spacing(4)};
                    background-color: ${theme.colors.blue};
                    color: #fff;
                    border-radius: ${theme.borderRadius};
                    text-decoration: none;
                    font-weight: bold;
                    &:hover {
                        background-color: ${theme.colors.primaryDark};
                    }
                `}
            >
                Go Back to Home
            </a>
        </div>
    );
};

export default ErrorPage;
