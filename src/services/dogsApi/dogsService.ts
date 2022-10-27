import axios from "axios"
import { ISearchByName, SearchByNameProps } from "./interface"

export class DogsService {
  private baseUrl = "https://api.thedogapi.com/v1"
  private imageUrl = "https://cdn2.thedogapi.com/images/"

  async searchByName({ textFilter }: SearchByNameProps): Promise<ISearchByName[]> {
    const req = await axios.request<ISearchByName[]>({
      method: "get",
      url: this.baseUrl + "/breeds/search",
      params: {
        q: textFilter
      }
    }).then((res) => res.data.filter((item) => item.reference_image_id != null) // Validates if data is filled
      .slice(0, 5).map((
      {
        id,
        name,
        country_code,
        life_span,
        breed_group,
        reference_image_id,
        bred_for
      }
    ) => (
      {
        id,
        name,
        country_code,
        life_span,
        breed_group,
        reference_image_id,
        bred_for,
        imageUrl: this.imageUrl + reference_image_id + '.jpg'
      }
    )))
      .catch((err) => Promise.reject(err)) // Error in request

    return req
  }
}

