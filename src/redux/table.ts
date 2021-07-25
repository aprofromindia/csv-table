import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Papa, { ParseResult } from 'papaparse';

const TABLE = 'table';
const LOAD = 'table/load';
const URL = './pricing.csv';

const initialState: string[][] = [];

// thunk
export const loadTable = createAsyncThunk<ParseResult<string[]>>(
  LOAD,
  function (_, { signal }) {
    return new Promise(function (resolve, reject) {
      Papa.parse(URL, {
        download: true,
        complete(res: ParseResult<string[]>) {
          if (signal.aborted) return reject(new Error('aborted'));
          return resolve(res);
        },
        error(err) {
          return reject(err);
        },
      });
    });
  }
);

// reducer
const { reducer } = createSlice({
  name: TABLE,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(loadTable.fulfilled, function (_, action) {
        return action.payload.data;
      })
      .addCase(loadTable.rejected, function () {
        return initialState;
      });
  },
});

export default reducer;
