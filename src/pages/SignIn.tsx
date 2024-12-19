/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import StatsHero from "../assets/stats-hero.svg";
import CodeAntBig from "../assets/codeant-big.svg";
import SignInOptions from "../components/SignInOptions";

const SignIn: React.FC = () => {
    return (
        <div
            css={css`
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 100vh;
                overflow: hidden;

                ${theme.mediaQueries.tablet} {
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: ${theme.spacing(0)};
                }
            `}
        >
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    height: 100vh;
                    background-color: ${theme.colors.white};

                    ${theme.mediaQueries.tablet} {
                        display: none;
                    }
                `}
            >
                <img
                    src={StatsHero}
                    alt="stats-hero"
                    style={{
                        width: "100%",
                        maxWidth: "450px",
                        height: "auto",
                    }}
                />
            </div>
            <div
                css={css`
                    width: 50%;
                    background-color: ${theme.colors.background};
                    ${theme.mediaQueries.tablet} {
                        width: 100%;
                    }
                `}
            >
                <SignInOptions />
            </div>
            <img
                src={CodeAntBig}
                alt="codeant-big"
                css={css`
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 200px;
                    height: auto;
                    z-index: 0;

                    ${theme.mediaQueries.tablet} {
                        display: none;
                    }
                `}
            />
        </div>
    );
};

export default SignIn;
