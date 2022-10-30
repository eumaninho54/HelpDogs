import axios from 'axios';
import { DogDataDTO } from '../../dtos/dogDataDTO';
import { filterReqAPI } from '../../utils/filterReqAPI';
import {ISearchByName, SearchByNameProps, GetDogsProps} from './types';

export class DogsService {
  private baseUrl = 'https://api.thedogapi.com/v1';
  private imageUrl = 'https://cdn2.thedogapi.com/images/';

  async getDogs({limit}: GetDogsProps): Promise<DogDataDTO[]>{
    const req = await axios
      .request<ISearchByName[]>({
        method: 'get',
        url: this.baseUrl + '/breeds',
        params: {
          limit: limit,
        },
      })
      .then((res) =>  filterReqAPI(res.data, this.imageUrl))
      .catch(err => Promise.reject(err)) // Error in request
    
    return req
  }

  async searchByName({textFilter}: SearchByNameProps): Promise<DogDataDTO[]> {
    const req = await axios
      .request<ISearchByName[]>({
        method: 'get',
        url: this.baseUrl + '/breeds/search',
        params: {
          q: textFilter,
        },
      })
      .then(res => filterReqAPI(res.data, this.imageUrl))
      .catch(err => Promise.reject(err)); // Error in request

    return req;
  }
}
