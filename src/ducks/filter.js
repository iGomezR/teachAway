import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGalleryImages } from "../services/galleryAPI";

const initialState = {
  value: 0,
  images: [],
};

export const loadingGallery = createAsyncThunk(
  "filter/loadingGallery",
  async (args, thunkAPI) => {
    const imageList = await getGalleryImages({ ...args });
    console.log({ imageList });
    thunkAPI.dispatch(setImageList(imageList));
  }
);
const mergingImages = (arr) => {
  return [...new Set([].concat(...arr))];
};
const filterArray = (arr) => {
  return mergingImages(
    arr?.map((value) => (value?.images?.length > 0 ? value.images : []))
  )
    .filter((val) => val.type === "image/png")
    .map((val) => {
      const { id, title, description, link, upvotes, downvotes, score } = val;
      return {
        description,
        id,
        upvotes,
        downvotes,
        score,
        img: link,
        title: title || "No Title",
      };
    });
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setImageList: (state, action) => {
      state.images = filterArray(action.payload);
    },
    showItemOnModal: (state, action) => {
        state.modalImg = state.images.filter(img => img.id === action.payload);
      },
  },
});

// Action creators are generated for each case reducer function
export const { setImageList, showItemOnModal } =
  filterSlice.actions;

export default filterSlice.reducer;
