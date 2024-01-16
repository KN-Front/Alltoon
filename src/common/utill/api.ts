import qs from 'qs';

/**
 * get 방식 url 생성 함수
 * @param url 
 * @param params 
 * @returns 
 */
export const buildUrl = ( url: String  ,params: any) =>{
  const queryString = qs.stringify(params);
    return `${url}?${queryString}`;
}