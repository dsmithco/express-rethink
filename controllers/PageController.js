'use strict';

import axios from 'axios';

export default class PageController {

  constructor(props){

  }


  show(page_id){
    var url = 'https://jsonplaceholder.typicode.com/posts/' + page_id;
    return axios.get(url);
  }
}
