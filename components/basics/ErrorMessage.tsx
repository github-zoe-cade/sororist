import styled from "styled-components";

const Container = styled.div`
  color: var(--error100);
`;

export const ErrorMessage = ({ children }) => <Container>{children}</Container>;
