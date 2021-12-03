import styled from "styled-components";
import { upOnHover } from "styles/animations";
import { cardStyle } from "styles/utils";

const OtherLinkCardContainer = styled.a`
  ${cardStyle}
  text-decoration: none;
  color: var(--default2);
  ${upOnHover}

  &:hover {
    color: var(--default2);
  }

`;

const Image = styled.img`
  max-width: 100%;
`

const Text = styled.div`
  padding: 0 1rem;
`

const Domain = styled.p`
  color: var(--default1);
  margin: .5rem 0;
  font-weight: 400;
  font-weight: 600;
  letter-spacing: .2px;
`

const Title = styled.p`
  font-size: .9rem;
`

export const OtherLinkCard = ({ link }) => (
  <OtherLinkCardContainer href={link.url} target="_blank">
    <Image src={link.image} alt="article image" />
    <Text>
    <Domain><small>{link.domain}</small></Domain>
    <Title>{link.title}</Title>
    {/* <p><small>{link.description}</small></p> */}
    </Text>
  </OtherLinkCardContainer>
)
