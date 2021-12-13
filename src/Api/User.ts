import axios from 'axios';
import FiltersInterface from '../Page/Dashboard/User/component/FiltersInterface';
import UrlParamsParser from '../Utils/UrlParamsParser';

const { REACT_APP_API_URL } = process.env;
const USER_URI = '/users';

/**
 * Retrieve all users
 * @param filters
 * @param page
 * @param orderBy
 * @param orderDirection
 * @returns
 */
export function allUsers (
  filters: FiltersInterface | null = null,
  page: number = 1,
  orderBy: string = 'id',
  orderDirection = 'desc'
) {
  let url = `${REACT_APP_API_URL + USER_URI}?order[${orderBy}]=${orderDirection}&page=${page}`;

  if (filters !== null) {
    url = `${url + UrlParamsParser.parse(filters)}`;
  }

  return axios.get(url);
}

/**
 * Update a user partially
 * @param id
 * @param data
 * @returns
 */
export function patchUser (id: number, data: any) {
  return axios.patch(`${REACT_APP_API_URL + USER_URI}/${id}`, data, {
    headers: {
      'Content-Type': 'application/merge-patch+json'
    }
  });
}
