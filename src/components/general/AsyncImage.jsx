import PropType from "prop-types";

import { useEffect, useState } from "react";

export const AsyncImage = ({ url, alt }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);

  useEffect(() => {
    setLoadedSrc(null);
    if (url) {
      const handleLoad = () => {
        setLoadedSrc(url);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = url;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [url]);
  if (loadedSrc === url) {
    return <img alt={alt} src={url} />;
  }
  return null;
};

AsyncImage.propTypes = {
  url: PropType.string.isRequired,
  alt: PropType.string.isRequired,
};
