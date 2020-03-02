import * as ACTIONS from "./ActionConstants.jsx";
import {
  addNewCaption,
  addTagToCaption,
  fetchTags,
  getCaptions
} from "../EndPoints.jsx";
import {
  showCaptionForm,
  hidePreloader,
  showCaptionTagForm
} from "./Effects.jsx";

const { DISPLAY_CAPTIONS, NEW_TAG_TO_CAPTION, DISPLAY_TAGS } = ACTIONS;

export const addCaption = e => async dispatch => {
  e.preventDefault();
  dispatch(showCaptionForm(false));
  dispatch(hidePreloader(false));

  let value = e.target.caption.value;
  let response = await addNewCaption(value);
  if (response.data) {
    console.log(response.data);
    dispatch(hidePreloader(true));
    dispatch(fetchAllCaptions());
  } else {
    console.log("Failed");
  }
};

export const addNewTagToCaption = setParams => async dispatch => {
  dispatch(showCaptionTagForm([false, ""]));
  dispatch(hidePreloader(false));

  let [index, parentIndex] = setParams;
  let response = await addTagToCaption(index, parentIndex);
  if (response.data) {
    console.log(response.data);
    dispatch(hidePreloader(true));
    dispatch(fetchAllCaptions());
  } else {
    console.log("Failed");
  }

  return {
    type: NEW_TAG_TO_CAPTION,
    option: true
  };
};

export const displayAllCaptions = captions => {
  return {
    type: DISPLAY_CAPTIONS,
    captions
  };
};

export const displayAllTags = tags => {
  return {
    type: DISPLAY_TAGS,
    tags
  };
};

export const fetchAllCaptions = () => async dispatch => {
  let captions = [];
  let response = await getCaptions();
  if (response.data) {
    captions = response.data.data.captions;
    if (captions.length < 1) {
      captions = [
        { id: 1, caption: "Something Sha" },
        { id: 2, caption: "Something Sha" },
        { id: 3, caption: "Something Sha" }
      ];
    } else {
      dispatch(hidePreloader(true));
    }
    console.log(captions);
    dispatch(displayAllCaptions(captions));
  }
};

export const fetchAllTags = () => async dispatch => {
  let tags = [];
  dispatch(hidePreloader(false));
  let response = await fetchTags();
  if (response.data) {
    tags = response.data.data.tags;
    console.log(tags);
    dispatch(hidePreloader(true));
    dispatch(displayAllTags(tags));
  } else {
    console.log("Something unexpected happened");
  }
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
    case DISPLAY_TAGS:
      return {
        ...state,
        tags: action.tags
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
