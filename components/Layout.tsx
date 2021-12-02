import styled from "styled-components";

import { Navbar } from "./Layout/Navbar";
import { Footer } from "./Layout/Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
`;

const Main = styled.main`
  flex-grow: 1;
`;

type Layout = {
  currentPath?: string;
  children: React.ReactNode;
};

export const Layout = ({ currentPath, children }: Layout) => (
  <LayoutContainer>
    <Navbar currentPath={currentPath} />
    <Main>{children}</Main>
    <Footer />
  </LayoutContainer>
);
