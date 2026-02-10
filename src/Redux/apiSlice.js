export const addProduct = createAsyncThunk(
  "api/addproduct",
  async (product) => {
    const res = await axios.post(API_URL, product);
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "api/updateproduct",
  async ({ id, product }) => {
    const res = await axios.put(`${API_URL}/${id}`, product);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "api/deleteProduct",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);


const apiSlice=createSlice({
    name:"api",
    initialState:
    {
        data:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state,action)=>{
            state.status="loading";
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.data=action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status="failed";
            state.data=action.error.message;
            state.error=action.error.message;
        })

         .addCase(addProduct.fulfilled, (state, action) => {
      state.data.push(action.payload);
    })

    
        .addCase(updateProduct.fulfilled, (state, action) => {
            const index = state.data.findIndex(
            (item) => item.id === action.payload.id);
            if (index !== -1) {
            state.data[index] = action.payload;
            }
        })
    }

});

export default apiSlice.reducer;