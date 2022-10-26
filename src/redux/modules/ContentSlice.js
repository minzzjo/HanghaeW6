import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../cookie/cookie";
// import { create } from "json-server";
// import thunk from "redux-thunk";

const headers = {
'Content-Type' : 'application/json',
'Access_Token' : getCookie('Access_Token')
}
// Thunk function

//GET - GETCONTENT
export const __getContent = createAsyncThunk(
  "post/__getContent",
  async (thunkAPI) => {
    try {
      // console.log("encodeURI", encodeURI(getCookie("Access_Token")));
      console.log("getCookie", getCookie("Access_Token"));
      const data = await axios.get(
        "http://3.34.127.254:8080/post/movie", {headers : headers}
      
      ).then((response) => {
        console.log(response);
      })
      console.log("get data", data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// POST - ADDCONTENT
export const __addContent = createAsyncThunk(
  "post/__addcontent",
  async (payload, thunkAPI) => {
    try {
      console.log("쿠키", getCookie("Access_Token"));
      console.log("post payload", payload)
      await axios.post(
        "http://3.34.127.254:8080/post",
        payload,
        {headers: headers}
        ).then((response) => {
          console.log("response", response);
          return thunkAPI.fulfillWithValue(response.data)
        });
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// DELETE - DELETECONTENT
export const __deleteContent = createAsyncThunk(
  "post/__deleteContent",
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
  "post/__editContent",
  async (payload, thunkAPI) => {
    try {
      // 내용을 수정하고
      await axios.patch(`http://localhost:3001/content/${payload.id}`, { id: payload.id, content: payload.target });
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
  content: [
    {
      id: 1,
      image: "https://image.tving.com/upload/cms/caip/CAIP0400/P000388342.jpg/dims/resize/1280",
      category: "toon",
      title: "짱구는 못말려",
      content: "짱구와 떡잎유치원 친구들은 정말정말 못말려!",
    }
  ]
  // content: [],
  // error: null,
  // isLoading: false,
  // isSuccess: false,
};

// ExtraReducer
const ContentSlice = createSlice({
  name: "content",
  initialState,
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
      console.log("store", action.payload);
      state.content.push(action.payload)
    },
    [__addContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteContent.pending]: (state) => {
      state.isLoading = false;
    },
    [__deleteContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    },
    [__deleteContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },      
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
  }})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { getContent, addContent, deleteContent, editContent } = ContentSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default ContentSlice.reducer;

// getContent, addContent, deleteContent, editContent, clearContent 