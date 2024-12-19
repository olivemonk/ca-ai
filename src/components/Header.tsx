/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import NavButton from "./NavButton";
import { Plus, RefreshCcw, Search } from "lucide-react";

const Header: React.FC = () => {
    return (
        <div
            css={css`
                padding: ${theme.spacing(3)};
                display: flex;
                flex-direction: column;
                gap: ${theme.spacing(1)};
                border-bottom: 1px solid ${theme.colors.buttonBorderGray};

                ${theme.mediaQueries.tablet} {
                    padding: ${theme.spacing(2)};
                }
            `}
        >
            <header
                css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: ${theme.spacing(1)};

                    ${theme.mediaQueries.tablet} {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: ${theme.spacing(1)};
                    }
                `}
            >
                <div>
                    <h2
                        css={css`
                            margin: 0;
                            font-size: 1.5rem;
                        `}
                    >
                        Repositories
                    </h2>
                    <p
                        css={css`
                            margin: 0;
                            font-size: 0.9rem;
                            color: ${theme.colors.textSecondary};
                        `}
                    >
                        33 total repositories
                    </p>
                </div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: ${theme.spacing(2)};

                        ${theme.mediaQueries.tablet} {
                            justify-content: flex-start;
                            width: 100%;
                            align-items: flex-start;
                        }
                    `}
                >
                    <NavButton
                        label="Refresh"
                        icon={RefreshCcw}
                        href="/"
                        border={true}
                    />
                    <NavButton
                        label="Add Repository"
                        icon={Plus}
                        href="/"
                        isActive={true}
                    />
                </div>
            </header>
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    border: 1px solid ${theme.colors.textTertiary};
                    width: 30%;
                    padding: 0 ${theme.spacing(1)};
                    border-radius: ${theme.borderRadius};

                    ${theme.mediaQueries.tablet} {
                        width: 100%;
                    }
                `}
            >
                <Search size={20} color={theme.colors.textTertiary} />
                <input
                    type="text"
                    placeholder="Search Repositories"
                    css={css`
                        width: 100%;
                        padding: ${theme.spacing(1)} ${theme.spacing(2)};
                        border: 0px solid ${theme.colors.textTertiary};
                        border-radius: ${theme.borderRadius};
                        outline: none;
                        transition: box-shadow 0.2s ease;

                        &:focus {
                            outline: none;
                            box-shadow: 0 0 0px ${theme.colors.primary};
                        }
                    `}
                />
            </div>
        </div>
    );
};

export default Header;
