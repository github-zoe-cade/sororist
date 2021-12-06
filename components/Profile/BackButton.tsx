import styled from "styled-components";
import ArrowLeft from "public/icons/arrow-left.svg";

import { Button } from "components/basics/Button";

const goBack = () => {
  if (typeof window !== undefined) {
    window.history.back();
  }
};

const arrivedFromSearch = (fromPage: string) => {
  if (typeof window === "object") {
    const pathname = "localhost:3000"; // TODO Zoé
    const searchUrl = `${pathname}/${fromPage}`;
    console.log(searchUrl)
    console.log(document.referrer)
    return document.referrer.match(new RegExp(searchUrl));
  }
};

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
`;

export const BackButton = ({ fromPage, className }: { fromPage: string, className?: string }) => (
  <div className={className}>
    {arrivedFromSearch(fromPage) && (
      <StyledButton onClick={goBack}>
        <ArrowLeft aria-label="retour" />
        &nbsp;Retourner
      </StyledButton>
    )}
  </div>
);
