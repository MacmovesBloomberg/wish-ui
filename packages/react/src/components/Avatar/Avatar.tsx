import React from "react";
import { styled } from "../../system/styled";
import { avatarStyles } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

const StyledAvatar = styled("div", avatarStyles);

export const Avatar = React.forwardRef(
  <T extends React.ElementType = "div">(
    { src, alt, fallback, children, ...rest }: AvatarProps<T>,
    ref: any
  ) => {
    const [imageError, setImageError] = React.useState(false);

    const showImage = src && !imageError;

    return (
      <StyledAvatar ref={ref} {...(rest as any)}>
        {showImage ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }} // ⚠️ TEMP (we'll systemize later)
          />
        ) : (
          fallback || children
        )}
      </StyledAvatar>
    );
  }
);

Avatar.displayName = "Avatar";