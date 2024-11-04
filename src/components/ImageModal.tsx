import Modal from "react-modal"
import s from "./ImageModal.module.css"
import { useEffect } from "react"
import { Image } from "./App"
Modal.setAppElement("#root")


interface ImageModalProps {
  isOpen: boolean
  isClose: ()=> void
  image: Image | null
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, isClose, image }) => {

  if(!image) return null
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div>
      <Modal
        isOpen={isOpen}
        className={s.modal}
        onRequestClose={isClose}
        contentLabel="Selected Image"
        overlayClassName={s.overlay}
      >
        <img
          className={s.fullImg}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </Modal>
    </div>
  )
}

export default ImageModal
