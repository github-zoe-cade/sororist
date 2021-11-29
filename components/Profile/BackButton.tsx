import styled from "styled-components";
import { cssQueries, marginElement } from "styles/utils";

import { Button } from "components/basics/Button";
import { FaArrowLeft } from "react-icons/fa";

const goBack = () => {
  if (typeof window !== undefined) {
    window.history.back();
  }
};

const arrivedFromSearch = () => {
  if (typeof window === "object") {
    const pathname = "localhost:3000";
    const searchUrl = `${pathname}/search`;
    return document.referrer.match(new RegExp(searchUrl));
  }
};

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  margin: 0rem ${({ theme }) => theme.spacings.mainHorizontal};

  @media ${cssQueries.desktop} {
    margin-top: 1rem;
  }
`;

export const BackButton = () => (
  <div style={{ minHeight: "2rem" }}>
    {arrivedFromSearch() && (
      <StyledButton onClick={goBack}>
        <FaArrowLeft />
        &nbsp;Retourner
      </StyledButton>
    )}
  </div>
);