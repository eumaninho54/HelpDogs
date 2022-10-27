export interface ISearchByName {     // Return data of request
  id: number;
  name: string;
  bred_for: string;
  country_code: string;
  breed_group: string;
  life_span: string;
  reference_image_id: string;
  imageUrl: string;
}

export interface SearchByNameProps { // Data to be sent
  textFilter: string;
}