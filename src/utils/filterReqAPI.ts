import { ISearchByName } from '../services/dogsApi/types';
import { DogDataDTO } from './../dtos/dogDataDTO';

export const filterReqAPI = (data: ISearchByName[], imageUrl: string): DogDataDTO[] => (
  data.filter(
    item => item.reference_image_id != null &&
            item.breed_group != null &&
            item.height != null &&
            item.weight != null &&
            item.temperament != null) // Validates if data is broken from api
  .slice(0, 5)
  .map(
    ({
      id,
      name,
      life_span,
      breed_group,
      reference_image_id,
      bred_for,
      origin,
      temperament,
      weight,
      height
    }) => ({
      id,
      name,
      life_span: life_span || '',
      breed_group: breed_group.split(',')[0] || '',
      bred_for: bred_for || '',
      origin: origin || '',
      temperament: temperament.split(',')[0] || '',
      imageUrl: imageUrl + reference_image_id + '.jpg',
      weight: weight.imperial,
      height: height.imperial
    })
  )
)