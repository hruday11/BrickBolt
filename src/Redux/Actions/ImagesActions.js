import axios from 'axios';
var convert = require('xml-js');

export const GET_IMAGES = "get_images";
export const GET_IMAGES_SUCCESS = "get_images_success";
export const GET_IMAGES_ERROR = "get_images_error";

export function getImages() {
  return dispatch => {
    dispatch({
      type: GET_IMAGES
    });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=667a6ce5f358b237ec13e9d99bb659de&group_id=2309748%40N20&format=rest`
      )
      .then(response => {
          var result1 = JSON.parse(convert.xml2json(response.data, {compact: true}));
        dispatch({
          type: GET_IMAGES_SUCCESS,
          payload: result1.rsp.photos.photo
        });
        //   for (let i = 0; i < response.data.hits.length; i++) {
        //     getSubmissionCount(response.data.hits[i].author).then(data => {
        //       response.data.hits[i]["submission_count"] = data;
        //       if (i === response.data.hits.length - 1) {
        //         dispatch({
        //           type: GET_NEWS_SUCCESS,
        //           payload: response.data
        //         });
        //       }
        //     });
        //   }
      })
      .catch(error => {
        dispatch({
          type: GET_IMAGES_ERROR,
          payload: error
        });
      });
  };
}
