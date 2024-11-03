import { Image } from "../../assets/unsplash-api"
import s from "./ImageCard.module.css"

interface ImageCardProps {
  galleryData: Image
  onClick: (image: Image)=> void 
}

const ImageCard: React.FC<ImageCardProps> = ({galleryData,
  galleryData: {
    urls: { small },
    alt_description,
  },
  onClick,
}) => {
  return (
    <div className={s.imageBox}>
      <img
        className={s.image}
        src={small}
        alt={alt_description}
        onClick={()=>onClick(galleryData)}
      />
    </div>
  )
}

export default ImageCard
