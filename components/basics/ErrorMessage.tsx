import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme.colors.error};
`;

export const ErrorMessage = ({ children }) => <Container>{children}</Container>;
