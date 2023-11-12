import Classes from "../assets/Css/ArticleSection.module.css"
import imageDesktop from "../assets/home/desktop/article.png"
import imageTablet from "../assets/home/tablet/article.png"
import imageMobile from "../assets/home/mobile/article.png"

const ArticleSection = ({style}) => {
  return (
    <section style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
    <div className={`${Classes[style]}`}>
      <div className={Classes.leftSection}>
        <h1>Bringing you the <span>best</span> audio gear</h1>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      <div className={Classes.rightSection}>
        <img className={Classes.imageDesktop} src={imageDesktop}/>
        <img className={Classes.imageTablet} src={imageTablet}/>
        <img className={Classes.imageMobile} src={imageMobile}/>
        </div>
    </div>
    </section>
  )
}

export default ArticleSection
