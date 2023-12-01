import { createSlice } from "@reduxjs/toolkit";

const AdminDataSlice = createSlice({
  name: "admindata",
  initialState: {
    chartdata: [
      {
        id: Math.random() * 1000000,
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
          datasets: [
            {
              label: "MRR Growth",
              data: [10, 3, 40, 5, 60, 23],
            },
          ],
        },
      },
      {
        id: Math.random() * 1000000,
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
          datasets: [
            {
              label: "MRR Growth",
              data: [10, 3, 40, 5, 60, 23],
            },
          ],
        },
      },
    ],
  },
  reducers: {
    setType: (state, action) => {
      console.log(action.payload.type);

      state.chartdata.filter(value => {
        if (value.id == action.payload.id) value.type = action.payload.type;
      });
      return state;
    },
  },
});

export const { setType } = AdminDataSlice.actions;
export default AdminDataSlice.reducer;
