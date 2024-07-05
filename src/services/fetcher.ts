import axios from 'axios';

import { IFetcherData } from './fetcher.d';

const baseURL = 'https://rickandmortyapi.com/api/character';

export const fetcher = (fetcherData: IFetcherData) =>
  axios({ ...fetcherData, baseURL }).then((res) => res.data);
