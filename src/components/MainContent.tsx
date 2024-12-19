/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import RepositoryList from "./RepositoryList";
import Header from "./Header";
import { repositories } from "../data/repositories";

const MainContent: React.FC = () => {
    return (
        <div
            css={css`
                border-radius: ${theme.borderRadius};
                background-color: ${theme.colors.white};
                flex: 1;
                height: 100%;
            `}
        >
            <Header />
            <RepositoryList repositories={repositories} />
        </div>
    );
};

export default MainContent;
