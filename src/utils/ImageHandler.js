import image from "../logo.svg";

const onExternalImageError = (evt) => {
  evt.target.src = image;
};
export default onExternalImageError;
