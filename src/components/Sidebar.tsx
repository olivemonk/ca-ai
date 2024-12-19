/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import Logo from "./Logo";
import SelectUser from "./SelectUser";
import NavButton from "./NavButton";
import { navItems, navSecondaryItems, userList } from "../data/sidebar-data";

const Sidebar: React.FC = () => {
    return (
        <aside
            css={css`
                width: 250px;
                background-color: ${theme.colors.white};
                color: ${theme.colors.text};
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                ${theme.mediaQueries.tablet} {
                    display: none;
                }
            `}
        >
            <div
                css={css`
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;
                    padding: ${theme.spacing(2)};
                    gap: ${theme.spacing(3)};
                `}
            >
                <Logo width="28px" height="28px" />
                <SelectUser users={userList} placeholder={userList[0]} />
                <nav
                    css={css`
                        display: flex;
                        flex-direction: column;
                        gap: ${theme.spacing(1)};
                    `}
                >
                    {navItems.map((item) => (
                        <NavButton
                            key={item.href}
                            label={item.label}
                            href={item.href}
                            icon={item.icon}
                            isActive={item.isActive}
                        />
                    ))}
                </nav>
            </div>

            <div
                css={css`
                    padding: ${theme.spacing(2)};
                `}
            >
                {navSecondaryItems.map((item) => (
                    <NavButton
                        key={item.href}
                        label={item.label}
                        href={item.href}
                        icon={item.icon}
                    />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
