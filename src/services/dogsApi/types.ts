// Return data of request
export interface ISearchByName {     
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  reference_image_id: string;
  origin: string;
  temperament: string;
  weight: {
    imperial: string
    metric: string
  }
  height: {
    imperial: string
    metric: string
  }
}

// Data to be sent
export interface SearchByNameProps { 
  textFilter: string;
}

export interface GetDogsProps {
  limit: number;
}
