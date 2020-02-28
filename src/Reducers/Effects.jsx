import * as ACTIONS from "./ActionConstants.jsx";

const { SHOW_CAPTION_FORM, SHOW_CAPTION_TAG_FORM, TOGGLE_ICON } = ACTIONS;

export const showCaptionForm = option => ({
  type: SHOW_CAPTION_FORM,
  option
});

export const showCaptionTagForm = option => ({
  type: SHOW_CAPTION_TAG_FORM,
  option
});

export const toggleIcon = (index, arr, parentIndex) =>  {
  let new_baba = [];
  console.log(" this is index >> ", index);
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      new_baba.push(true);
    } else {
      new_baba.push(false);
    }
  }

  return {
    type: TOGGLE_ICON,
    icons: new_baba,
    setParams: [index, parentIndex]
  }
};


export default function reducer(
  state = {
    isCaptionForm: false,
    setQuery: null,
    setParams: [],
    isIcon: [],
    isCaptionTagForm: false
  },
  action
  ) {
  switch (action.type) {
    case SHOW_CAPTION_FORM:
      return {
        ...state,
        isCaptionForm: action.option,
        isCaptionTagForm: action.option
      };
    case SHOW_CAPTION_TAG_FORM:
      return {
        ...state,
        isCaptionTagForm: action.option[0],
        setQuery: action.option[1]
      };
    case TOGGLE_ICON:
      return {
        ...state,
        isIcon: action.icons,
        setParams: action.setParams
      };
    default:
      return state;
  }
}
