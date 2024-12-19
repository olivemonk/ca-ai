/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            css={css`
                display: flex;
                height: 100vh;
                background-color: ${theme.colors.background};
            `}
        >
            <Sidebar />
            <div
                css={css`
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                `}
            >
                <main
                    css={css`
                        padding: ${theme.spacing(4)};
                        flex: 1;
                        overflow-y: auto;

                        ${theme.mediaQueries.tablet} {
                            padding: 0px;
                        }
                    `}
                >
                    <MobileSidebar />
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
