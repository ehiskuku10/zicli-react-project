import * as ACTIONS from "./ActionConstants.jsx";
import {
  addNewCaption,
  addTagToCaption,
  getCaptions,
  fetchTags
} from "../EndPoints.jsx";
import { showCaptionForm } from "./Effects.jsx";

const {
  ADD_CAPTION,
  DISPLAY_CAPTIONS,
  FETCH_TAGS,
  FETCH_CAPTIONS,
  NEW_TAG_TO_CAPTION
} = ACTIONS;

export const addCaption = e => dispatch => {
  e.preventDefault();
  let captions = [];

  let value = e.target.caption.value;
  addNewCaption(value).then(response => {
    if (response.data) {
      captions = response.data.data.captions;
    } else {
      console.log("Failed");
    }
  });
  dispatch(showCaptionForm(false));
  dispatch(fetchCaptions());
  return {
    type: ADD_CAPTION,
    captions
  };
};

export const fetchCaptions = e => dispatch => {
  let captions = [];
  getCaptions().then(response => {
    if (response.data) {
      captions = response.data.data.captions;
    } else {
      console.log("Failed");
    }
  });
  console.log(captions)
  return {
    type: FETCH_CAPTIONS,
    captions
  };
};

export const addNewTagToCaption = setParams => dispatch => {
  let [index, parentIndex] = setParams;
  addTagToCaption(index, parentIndex).then(response => {
    console.log(response);
  });

  return {
    type: NEW_TAG_TO_CAPTION,
    option: true
  }
};

export const displayAllCaptions = captions => {
  return {
    type: DISPLAY_CAPTIONS,
    captions
  };
};

export const fetchAllTags =  (tags) => {
  return {
    type: FETCH_TAGS,
    tags                                                                                             
  };
};

export default function reducer(
  state = {
    captions: [],
    tags: [],
    hideModal: false
  },
  action
) {
  switch (action.type) {
    case ADD_CAPTION:
      return {
        ...state,
        captions: action.captions
      };
    case FETCH_TAGS:
      return {
        ...state,
        tags: action.tags
      };
    case FETCH_CAPTIONS:
      return {
        ...state,
        captions: action.captions
      };
    case DISPLAY_CAPTIONS:
      return {
        ...state,
        captions: action.captions
      };
    case NEW_TAG_TO_CAPTION:
      return {
        ...state,
        hideModal: action.option
      };
    default:
      return state;
  }
}
