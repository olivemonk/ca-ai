/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import { Repository } from "../types/types";
import { Database, Dot } from "lucide-react";

const RepositoryList: React.FC<{ repositories: Repository[] }> = ({
    repositories,
}) => {
    return (
        <div>
            {repositories.map((repo) => (
                <div
                    key={repo.name}
                    css={css`
                        background-color: ${theme.colors.white};
                        border-bottom: 1px solid
                            ${theme.colors.buttonBorderGray};
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    `}
                >
                    <div
                        css={css`
                            display: flex;
                            flex-direction: column;
                            gap: ${theme.spacing(1)};
                            padding: ${theme.spacing(2)} ${theme.spacing(3)};
                            width: 100%;
                        `}
                    >
                        <div
                            css={css`
                                display: flex;
                                align-items: center;
                                gap: ${theme.spacing(2)};
                            `}
                        >
                            <h3>{repo.name}</h3>
                            <span
                                css={css`
                                    background-color: ${repo.visibility ===
                                    "Public"
                                        ? theme.colors.blueBg
                                        : theme.colors.gray};
                                    color: ${theme.colors.ligthBlue};
                                    padding: ${theme.spacing(0.5)}
                                        ${theme.spacing(1.5)};
                                    border: 1px solid ${theme.colors.ligthBlue};
                                    border-radius: 12px;
                                    font-size: 0.7rem;
                                `}
                            >
                                {repo.visibility}
                            </span>
                        </div>
                        <div
                            css={css`
                                display: flex;
                                align-items: center;
                                gap: ${theme.spacing(3)};
                            `}
                        >
                            <div
                                css={css`
                                    margin: 0;
                                    font-size: 0.9rem;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: ${theme.colors.textSecondary};
                                `}
                            >
                                {repo.language}
                                <Dot color={theme.colors.blue} size={30} />
                            </div>
                            <p
                                css={css`
                                    margin: 0;
                                    font-size: 0.9rem;
                                    color: ${theme.colors.textSecondary};
                                `}
                            >
                                <Database size={10} /> {repo.size}
                            </p>
                            <p
                                css={css`
                                    margin: 0;
                                    font-size: 0.9rem;
                                    color: ${theme.colors.textSecondary};
                                `}
                            >
                                Updated {repo.updated}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RepositoryList;
