import React from "react"
import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"
import { Image } from "../../assets/unsplash-api"


interface ImageGalleryProps {
  galleryData:Image[]
  onImageClick: (image: Image)=> void 
}

const ImageGallery : React.FC<ImageGalleryProps> = ({galleryData,onImageClick}) => {

  return (
    <ul className={s.galleryList}>
{galleryData.map(item=><li key={item.id}>
<ImageCard galleryData={item} onClick={onImageClick} />
	</li> )}
	
</ul>

  )
}

export default ImageGallery 