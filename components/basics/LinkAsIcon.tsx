import styled from "styled-components";

type LinkAsIconProps = {
  href: string;
  Icon: React.FunctionComponent<any>;
  alt: string;
  className?: string;
};

export const LinkAsIcon = ({ href, Icon, alt, className }: LinkAsIconProps) => {
  const StyledIcon = styled(Icon)`
    fill: ${({ theme }) => theme.colors.primary1};

    &:hover {
      fill: ${({ theme }) => theme.colors.secondary1};
    }
  `;

  return (
    <a href={href}>
      <StyledIcon className={className} alt={alt} />
    </a>
  );
};
