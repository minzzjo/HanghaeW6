import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { create } from "json-server";
// import thunk from "redux-thunk";


// Thunk function

//GET - GETCONTENT
export const __getContent = createAsyncThunk(
  "content/__getContent",
  async (thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/content");
      console.log("get data", data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// POST - ADDCONTENT
export const __addContent = createAsyncThunk(
  "content/__addcontent",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/content", payload);
      console.log("post data", data.data)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// DELETE - DELETECONTENT
export const __deleteContent = createAsyncThunk(
  "content/__deleteContent",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/content/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// PATCH(PUT) - EDITCONTENT
export const __editContent = createAsyncThunk(
  "content/__editContent",
  async (payload, thunkAPI) => {
    try {
      // 내용을 수정하고
      await axios.patch(`http://localhost:3001/${payload}`, { id: payload.id, content: payload.target });
      // 수정한 값을 넣은 새로운 내용을 get으로 가져온다
      const data = await axios.get("http://localhost:3001/content");
      // 성공하면 가져온 수정 데이터를 보내주고
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // 실패하면 서버에서 에러메시지를 보내준다.
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// initialState
const initialState = {
  content: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

// ExtraReducer
const ContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    clearContent: (state) => {
      state.content = {
        id: 0,
        url: "",
        // category: "",
        title: "",
        body: "",
      }
    }
  },
  extraReducers: {
    [__getContent.pending]: (state) => {
      state.isLoading = true;
    },
    [__getContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addContent.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    [__addContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.error = action.payload;
    },
    [__addContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteContent.fulfilled]: (state, action) => {
      const target = state.content.findIndex(
        (content) => content.id === action.payload
      );
      state.content.splice(target, 1);
    },
      [__deleteContent.rejected]: () => { },
      [__deleteContent.pending]: () => { },
      
    [__editContent.pending]: (state) => {
      state.isLoading = false;
    },
    [__editContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    },
    [__editContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { getContent, addContent, deleteContent, editContent, clearContent } = ContentSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default ContentSlice.reducer;