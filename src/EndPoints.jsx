import axios from "axios";

export const getCaptions = () => {
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://capcards-api.herokuapp.com/v1.0/api/caption/`
    )
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const addNewCaption = value => {
  return axios
    .post(
      `https://capcards-api.herokuapp.com/v1.0/api/caption/`, {
        caption: value 
      }
    )
    .then(response => {
      console.log(response);
      return response;
    });
};

export const fetchTags = () => {
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://capcards-api.herokuapp.com/v1.0/api/tag/`
    )
    .then(response => {
      // console.log(response);
      return response;
    });
};

export const addTagToCaption = (tagId, captionId) => {
  console.log([tagId, captionId]);
  return axios
    .post("https://capcards-api.herokuapp.com/v1.0/api/caption/add-tag", {
      captionId: captionId,
      tagId: tagId
    })
    .then(response => {
      console.log(response);
      return response;
    });
};
