import Api from './api_config';

export default { 

    //get data
    getCubytCategories: params =>  Api.get(`https://www.cubyt.io/data/categories`),
  
};