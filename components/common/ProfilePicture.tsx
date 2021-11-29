import styled from "styled-components";
import Image from "next/image";

const profilePictureLoader = ({ src, size }) => src;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

type ProfilePicture = { pictureUrl: string };

export const ProfilePicture = ({ pictureUrl }: ProfilePicture) => (
  <div style={{position: "relative", width: "100%"}}>
    <RoundedImage
      src={pictureUrl}
      // TODO Zoé optimize
      unoptimized
      alt="photo de profil"
      height={10}
      width={10}
      layout="responsive"
    />
  </div>
);
