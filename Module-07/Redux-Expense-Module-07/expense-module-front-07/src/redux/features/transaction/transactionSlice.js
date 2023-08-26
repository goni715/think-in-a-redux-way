import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addTransaction, deleteTransaction, editTransaction, getTransactions} from "./transactionAPI.js";

const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
};



//async thunks
export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async () => {
    const transactions = await getTransactions();
    return transactions;
})

export const createTransaction = createAsyncThunk('transaction/createTransaction', async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
})


export const updateTransaction = createAsyncThunk('transaction/updateTransaction', async ({id, data}) => {
    const transaction = await editTransaction(id,data);
    return transaction;
})

export const removeTransaction = createAsyncThunk('transaction/removeTransaction', async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
})



const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
       editActive : (state, action) => {
           state.editing = action.payload;
       },
       editInActive : (state, action) => {
            state.editing = {};
       }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
             })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
               state.isLoading = false;
               state.isError = false;
               state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.error = action?.error?.message;
              state.transactions = [];
            })
            .addCase(createTransaction.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions.push(action.payload);//new transaction
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
            })
            //Update Transaction Part
            .addCase(updateTransaction.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(updateTransaction.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                const indexToUpdate = state.transactions.findIndex(
                    (t) => t.id === action.payload.id
                );

                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(updateTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
            })
            //Remove Transaction Part
            .addCase(removeTransaction.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                console.log(action);
                state.isError = false;
                state.isLoading = false;

                state.transactions = state.transactions.filter(
                    (t) => t.id !== action.meta.arg
                );
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
            })
    }
})




export const {editActive, editInActive} = transactionSlice.actions;


const transactionSliceReducer = transactionSlice.reducer;
export default transactionSliceReducer;

