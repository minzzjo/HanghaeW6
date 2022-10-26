import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../cookie/cookie";
// import { create } from "json-server";
// import thunk from "redux-thunk";
import { useNavigate } from "react-router-dom";

const headers = {
  "Content-Type": "application/json",
  Access_Token: getCookie("Access_Token"),
};
// Thunk function

//GET - GETCONTENT
export const __getContent = createAsyncThunk(
  "post/__getContent",
  async (payload, thunkAPI) => {
    try {
      // console.log("encodeURI", encodeURI(getCookie("Access_Token")))
      const response = await axios.get("http://54.180.140.58:8080/post/movie", {
        headers: headers,
      });
      if (response.data.ok === true) {
        console.log("리스폰값", response);
        return thunkAPI.fulfillWithValue(response.data.data);
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
      // const data = await axios.get("http://3.34.127.254:8080/post/movie", {
      //   headers: headers,
      // });
      // // .then((response) => {
      // //   console.log(response);
      // //   // console.log("데이터.데이터", response.data.data);
      // //   return thunkAPI.fulfillWithValue(response.data.data);
      // // });
      // return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// POST - ADDCONTENT
export const __addContent = createAsyncThunk(
  "post/__addcontent",
  async (payload, thunkAPI) => {
    console.log("페이로드 값", payload);
    // const navigate = useNavigate();
    try {
      await axios
        .post("http://54.180.140.58:8080/post", payload, { headers: headers })
        .then((response) => {
          console.log("통신 성공", payload);
          if (response.data.ok) {
            return thunkAPI.fulfillWithValue(response.data.ok);
          }
        });
    } catch (error) {
      console.log("통신 실패", payload);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
);

// PATCH(PUT) - EDITCONTENT
export const __editContent = createAsyncThunk(
  "post/__editContent",
  async (payload, thunkAPI) => {
    try {
      // 내용을 수정하고
      await axios.patch(`http://localhost:3001/content/${payload.id}`, {
        id: payload.id,
        content: payload.target,
      });
      // 수정한 값을 넣은 새로운 내용을 get으로 가져온다
      const data = await axios.get("http://localhost:3001/content");
      // 성공하면 가져온 수정 데이터를 보내주고
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // 실패하면 서버에서 에러메시지를 보내준다.
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// initialState
const initialState = {
  content: [
    {
      id: 1,
      image:
        "https://image.tving.com/upload/cms/caip/CAIP0400/P000388342.jpg/dims/resize/1280",
      category: "toon",
      title: "짱구는 못말려",
      content: "짱구와 떡잎유치원 친구들은 정말정말 못말려!",
    },
  ],
  // content: [],
  // error: null,
  // isLoading: false,
  // isSuccess: false,
};

// ExtraReducer
const ContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: {
    [__getContent.pending]: (state) => {
      state.isLoading = true;
    },
    [__getContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
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
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = ContentSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default ContentSlice.reducer;

// getContent, addContent, deleteContent, editContent, clearContent
