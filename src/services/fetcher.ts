import axios from 'axios';

import { IFetcherData } from './fetcher.d';

const baseURL = 'https://rickandmortyapi.com/api/character';

export const fetcher = ({ url, method, data }: IFetcherData) =>
  axios({ url, method, data, baseURL }).then((res) => res.data);
