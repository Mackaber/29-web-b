import axios from "axios";

export async function get_all_products() {
  let config = {
    method: 'get',
    url: 'https://devf29webb-fc70.restdb.io/rest/products',
    headers: { 
      'x-apikey': '65790996993e5fb439d25219'
    }
  };

  return await axios.request(config)
  .then((response) => response.data) 
}

export async function post_product() {
  let config = {
    method: 'get',
    url: 'https://devf29webb-fc70.restdb.io/rest/products',
    headers: { 
      'x-apikey': '65790996993e5fb439d25219'
    }
  };

  return await axios.request(config)
  .then((response) => response.data) 
}
