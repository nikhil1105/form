import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('Data') || '[{"id":"email","name": "name","email": "email","age": "age","skills": "skillvar","gender": "gender","dob": "dob","hobby": "hobby"}]')
};

const Data = createSlice({
    name: 'Data',
    initialState,
    reducers: {
        Update(state, action) {
            state.tasks = action.payload;
            localStorage.setItem('Data', JSON.stringify(action.payload));
            console.log(current(state));
        },

    },
});



export const { Update } = Data.actions;
export default Data.reducer;
