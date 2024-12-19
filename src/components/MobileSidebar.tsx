/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { theme } from "../styles/theme";
import Logo from "./Logo";
import SelectUser from "./SelectUser";
import { navItems, navSecondaryItems, userList } from "../data/sidebar-data";
import { Menu, X } from "lucide-react";
import MobileNavButton from "./MobileNavButton";

const MobileSidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div
                css={css`
                    display: none;
                    ${theme.mediaQueries.tablet} {
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: ${theme.spacing(2)};
                        background-color: ${theme.colors.white};
                        border-bottom: 1px solid
                            ${theme.colors.buttonBorderGray};
                        z-index: 1000;
                    }
                `}
            >
                <Logo width="28px" height="28px" />
                <button
                    onClick={toggleSidebar}
                    css={css`
                        background: none;
                        border: none;
                        cursor: pointer;
                    `}
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isSidebarOpen && (
                <div
                    css={css`
                        ${theme.mediaQueries.tablet} {
                            position: fixed;
                            top: 10;
                            left: 0;
                            width: 100%;
                            min-height: 40%;
                            background-color: ${theme.colors.white};
                            color: ${theme.colors.text};
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            z-index: 20;
                        }
                    `}
                >
                    <div
                        css={css`
                            display: flex;
                            align-items: flex-start;
                            flex-direction: column;
                            padding: ${theme.spacing(2)};
                            gap: ${theme.spacing(2)};
                        `}
                    >
                        <SelectUser
                            users={userList}
                            placeholder={userList[0]}
                            fullWidth={true}
                        />

                        <div
                            css={css`
                                display: flex;
                                align-items: flex-start;
                                flex-direction: column;
                                width: 100%;
                                gap: ${theme.spacing(0.5)};
                            `}
                        >
                            {[...navItems, ...navSecondaryItems].map((item) => (
                                <MobileNavButton
                                    key={item.href}
                                    label={item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    isActive={item.isActive}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    css={css`
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background: rgba(0, 0, 0, 0.5);
                        z-index: 10;
                    `}
                ></div>
            )}
        </>
    );
};

export default MobileSidebar;
