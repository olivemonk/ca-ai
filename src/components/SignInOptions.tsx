/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Button from "./Button";
import { theme } from "../styles/theme";
import { signInButtons } from "../data/singin-options";
import Logo from "./Logo";
import TabButton from "./TabButton";
import { useNavigate } from "react-router-dom";

const SignInOptions: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"saas" | "self-hosted">("saas");
    const navigate = useNavigate();

    const handleSignIn = (provider: string) => {
        localStorage.setItem("authToken", "dummy-token");
        console.log(`Signed in with ${provider}`);
        navigate("/");
    };

    const filteredButtons = signInButtons.filter(
        (button) => button.type === activeTab
    );

    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                text-align: center;
                width: 100%;
                gap: ${theme.spacing(1)};
            `}
        >
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: ${theme.colors.white};
                    width: 80%;
                    padding: ${theme.spacing(6)};
                    border-radius: ${theme.borderRadius};
                    height: 600px;
                    box-shadow: 0px 1px 2px 0px
                        var(--ColorsEffectsShadowsshadow-xs);
                    gap: ${theme.spacing(4)};

                    ${theme.mediaQueries.tablet} {
                        width: 95%;
                    }
                `}
            >
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: ${theme.spacing(3)};
                    `}
                >
                    <Logo width="22px" height="22px" />
                    <h1
                        css={css`
                            font-size: 1.8rem;
                            color: ${theme.colors.textPrimary};
                            font-weight: 600;

                            ${theme.mediaQueries.tablet} {
                                font-size: 1.5rem;
                            }
                        `}
                    >
                        Welcome to CodeAnt AI
                    </h1>
                </div>

                <div
                    css={css`
                        display: flex;
                        justify-content: center;
                        width: 100%;
                        max-width: 550px;
                        border: 1px solid ${theme.colors.offwhite};
                        border-radius: ${theme.borderRadius};
                    `}
                >
                    <TabButton
                        active={activeTab === "saas"}
                        onClick={() => setActiveTab("saas")}
                        label="SAAS"
                        borderRadius={`${theme.borderRadius} 0 0 ${theme.borderRadius}`}
                    />
                    <TabButton
                        active={activeTab === "self-hosted"}
                        onClick={() => setActiveTab("self-hosted")}
                        label="Self Hosted"
                        borderRadius={`0 ${theme.borderRadius} ${theme.borderRadius} 0`}
                    />
                </div>

                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        gap: ${theme.spacing(2)};
                        width: 100%;
                        max-width: 400px;
                    `}
                >
                    {filteredButtons.map((button, index) => (
                        <Button
                            key={index}
                            text={button.text}
                            icon={button.icon}
                            iconType={button.iconType as "lucide" | "svg"}
                            iconSize={24}
                            onClick={() => handleSignIn(button.text)}
                        />
                    ))}
                </div>
            </div>

            <p
                css={css`
                    font-size: 0.875rem;
                    color: ${theme.colors.textPrimary};
                    margin-top: ${theme.spacing(4)};
                `}
            >
                By signing up you agree to the{" "}
                <a
                    css={css`
                        font-weight: 700;
                    `}
                    href="/privacy"
                >
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
};

export default SignInOptions;
