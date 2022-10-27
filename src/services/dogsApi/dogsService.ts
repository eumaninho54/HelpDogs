import axios from "axios"
import { ISearchByName, SearchByNameProps } from "./interface"

export class DogsService {
  private baseUrl = "https://api.thedogapi.com/v1"
  private imageUrl = "https://cdn2.thedogapi.com/images/"

  async searchByName({ textFilter }: SearchByNameProps): Promise<ISearchByName> {
    const req = await axios.request<ISearchByName>({
      method: "get",
      url: this.baseUrl + "/breeds/search",
      params: {
        q: textFilter
      }
    }).then((res) => ({...res.data, imageUrl: this.imageUrl + res.data['reference_image_id']}))
      .catch((err) => Promise.reject(err)) // Error in request

    return req
  }
}

