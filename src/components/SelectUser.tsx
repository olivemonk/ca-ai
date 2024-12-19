/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { theme } from "../styles/theme";
import { ChevronDown } from "lucide-react";

type SelectUserProps = {
    users: string[];
    placeholder?: string;
    fullWidth?: boolean;
};

const SelectUser: React.FC<SelectUserProps> = ({ users, placeholder = "Select a user", fullWidth = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (user: string) => {
        setSelectedUser(user);
        setIsOpen(false);
    };

    return (
        <div
            css={css`
                position: relative;
                display: inline-block;
                width: ${fullWidth ? "100%" : "200px"};
            `}
        >
            <button
                onClick={toggleDropdown}
                css={css`
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: ${theme.spacing(2)};
                    background-color: ${theme.colors.white};
                    border: 1px solid ${theme.colors.buttonBorderGray};
                    color: ${theme.colors.textPrimary};
                    border-radius: ${theme.borderRadius};
                    text-align: left;
                    height: 35px;
                    font-weight: 500;
                    cursor: pointer;

                    &:hover {
                        background-color: ${theme.colors.background};
                    }
                `}
            >
                {selectedUser || placeholder}
                <ChevronDown color={theme.colors.textPrimary}/>
            </button>

            {isOpen && (
                <ul
                    css={css`
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background-color: ${theme.colors.white};
                        border: 1px solid ${theme.colors.buttonBorderGray};
                        color: ${theme.colors.textPrimary};
                        border-radius: ${theme.borderRadius};
                        margin-top: 10px;
                        padding: 0;
                        list-style: none;
                        z-index: 1000;
                    `}
                >
                    {users.map((user) => (
                        <li
                            key={user}
                            onClick={() => handleSelect(user)}
                            css={css`
                                padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
                                cursor: pointer;

                                &:hover {
                                    background-color: ${theme.colors.background};
                                }
                            `}
                        >
                            {user}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectUser;
