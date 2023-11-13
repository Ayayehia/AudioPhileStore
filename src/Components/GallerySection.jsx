import Classes from "../assets/Css/GallerySection.module.css";

const GallerySection = ({ data }) => {
  const productData = data[0];
  const gallery = productData.gallery;
  console.log(gallery, "gallery");
  const Gallery = [gallery];

  console.log(Gallery, "Gallery object");
  return (
    <div className={Classes.container}>
      <div className={Classes.leftSection}>
        {Gallery.map((prod) => (
          <>
            <div className={Classes.topSection}>
              <img className={Classes.topSection} src={prod.first.desktop} />
            </div>
            <div className={Classes.bottomSection}>
              <img className={Classes.topSection} src={prod.second.desktop} />
            </div>
          </>
        ))}
      </div>
      {Gallery.map((prod) => (
        <div className={Classes.rightSection}>
          <img className={Classes.rightSection} src={prod.third.desktop} />
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
