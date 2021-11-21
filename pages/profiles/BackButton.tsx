import styled from "styled-components";
import { marginElement } from "styles/utils";

import { Button } from "components/basics/Button";

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
  margin: 1rem ${({ theme }) => theme.spacings.mainHorizontal};
`

export const BackButton = () => (
  <div style={{minHeight: "2rem"}}>
   {arrivedFromSearch() && <StyledButton onClick={goBack}>Retourner</StyledButton>}
  </div>
)
