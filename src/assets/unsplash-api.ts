import axios from "axios";


const ACCESS_KEY = "w48nE406QPac_JiHuCS8dinob-zHN1XHUYxPavG31Zs"

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
      Authorization: `Client-ID ${ACCESS_KEY}`
    },
    params: {
      query: query, 
      per_page: 12,
      page: page
    }
  })
  return response.data 
}



