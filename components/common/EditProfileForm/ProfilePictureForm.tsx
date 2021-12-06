import { useState } from "react";
import styled from "styled-components";
import { buttonStyle, cssQueries } from "styles/utils";
import CloseIcon from "public/icons/close.svg";
import DownloadIcon from "public/icons/download.svg";

import { ProfilePicture } from "components/common/ProfilePicture";

const Container = styled.div`
  width: 9rem;
  flex-grow: 1;

  @media ${cssQueries.mobile} {
    margin: 0 auto;
  }
`;

const FileLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border: 1px dashed var(--default5);
  height: 100%;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  cursor: pointer;

  & > input[type="file"] {
    opacity: 0;
    font-size: .1rem;
  }
`;

const RemoveButton = styled.button`
  ${buttonStyle}
  position: absolute;
  top: 0;
  right: 0;
  line-height: 0;
  padding: 0.4rem;
  border-radius: 50%;
`;

export const ProfilePictureForm = ({ id, setFieldValue, ...field }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = async (e) => {
    const file = e.target.value
    if (!file) {
      // The file is not accepted
      window.alert(
        "Ce format n'est pas supporté. Merci de choisir un jpeg ou un png."
      );
      return;
    }
    setIsSubmitting(true);

    try {
      // upload to s3 or cloudinary or else
      const res = {
        data: {
          url: "https://images.radio-canada.ca/q_auto,w_960/v1/ici-info/16x9/nyan-cat.png",
        },
      };
      setFieldValue(field.name, res.data.url);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemove = () => {
    setFieldValue(field.name, "");
  };

  return (
    <Container>
      {!field.value && (
        <>
          <FileLabel htmlFor="profilePicture" tabIndex={0}>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/png, image/jpeg"
              tabIndex={-1}
              onChange={handleChange}
            />
            <DownloadIcon aria-hidden="true" height="2rem" width="2rem" />
            Choisir une photo
          </FileLabel>
        </>
      )}
      {!!field.value && (
        <div style={{ position: "relative" }}>
          <ProfilePicture pictureUrl={field.value} />
          {!isSubmitting && (
            <RemoveButton
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  // Enter
                  e.stopPropagation();
                  handleRemove();
                }
              }}
            >
              <CloseIcon
                aria-label="Enlever la photo"
                height="20px"
                width="20px"
              />
            </RemoveButton>
          )}
        </div>
      )}
    </Container>
  );
};
