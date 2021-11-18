import styled from "styled-components";
import Image from "next/image";

const profilePictureLoader = ({ src }) => src;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

export const ProfilePicture = ({ pictureUrl }) => (
  <RoundedImage
    src={pictureUrl}
    unoptimized
    alt="photo de profil"
    height={10}
    width={10}
    layout="responsive"
  />
);
