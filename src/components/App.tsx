import ImageGallery from "./ImageGallery"
import SearchBar from "./SearchBar"
import Loader from "./Loader.js"
import ErrorMessage from "./ErrorMessage.js"
import s from "./App.module.css"
import { useEffect, useState } from "react"
import LoadMoreBtn from "./LoadMoreBtn.js"
import ImageModal from "./ImageModal.js"
import axios from "axios";

const KEY = "xpqP5Qt73Cu7T5diEjSLw0JQUOTvS7JxZKgcQrF6CNQ"

export interface Image {
  id: string
  urls:{
    small: string
    regular: string
  }
  alt_description: string
}

export interface FetchImageResponse  {
  results: Image[]
  total: number
  total_pages: number
}

export const fetchImage = async (page:number,query:string): Promise<FetchImageResponse> => {
    const response = await axios.get<FetchImageResponse>('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${KEY}`
    },
    params: {
      query: query, 
      per_page: 12,
      page: page
    }
  })
  return response.data 
}

function App() {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState<string>("")
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const [totalImages, setTotalImages] = useState<number>(0)

  useEffect(() => {
    if (!query) {
      return
    }
    
    const getData = async (): Promise<void> => {
      try {
        setError(false)
        setLoading(true)
        const data : FetchImageResponse = await fetchImage(page, query)
        setImages((prev) => [...prev, ...data.results])
        setTotalImages(data.total)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [query, page])

  const handleSetQuery = (searchValue: string):void => {
    setQuery(searchValue)
    setImages([])
    setPage(1)
    setTotalImages(0)
  }

  const handleChangePage = (): void => {
    setPage((prev) => prev + 1)
  }

  function handleImageClick(image: Image):void {
    if (image) {
      setSelectedImage(image)
      setIsOpen(true)
    }
  }

  function closeModal():void {
    setIsOpen(false)
  }

  return (
    <div className={s.appContainer}>
      <SearchBar onSubmit={handleSetQuery} />
      <div className={s.mainContent}>
        {error && <ErrorMessage />}
        {!loading && images.length === 0 && query && (
          <p className={s.noResults}>
            Sorry, we could not find any photos matching your search. Please try
            another keyword
          </p>
        )}
        {images.length > 0 && (
          <ImageGallery onImageClick={handleImageClick} galleryData={images} />
        )}
        {loading && <Loader />}
        {images.length > 0 && images.length < totalImages && !loading && (
          <LoadMoreBtn onChangePage={handleChangePage} />
        )}
        {modalIsOpen && (
          <ImageModal
            isOpen={modalIsOpen}
            image={selectedImage}
            isClose={closeModal}
          />
        )}
      </div>
    </div>
  )
}

export default App
