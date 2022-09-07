import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    question_category : "",
    question_difficulty : "",
    question_type : "",
    amount_of_question : 50,
    score : 0
}

const questionsSlice =createSlice({
    name : 'questions',
    initialState,
    reducers:{
        CHANGE_CATEGORY:(state,action)=>{
            return {
                ...state,
                question_category:action.payload 
            }
        },
        CHANGE_DIFFICULTY:(state,action)=>{
            return {
                ...state,
                question_difficulty:action.payload 
            }
        },
        CHANGE_TYPE:(state,action)=>{
            return {
                ...state,
                question_type:action.payload 
            }
        },
        CHANGE_AMOUNT:(state,action)=>{
            return {
                ...state,
                amount_of_question:action.payload 
            }
        },
        CHANGE_SCORE:(state,action)=>{
            return {
                ...state,
                score:action.payload 
            }
        },

    }
})

export const {CHANGE_CATEGORY , CHANGE_DIFFICULTY, CHANGE_TYPE, CHANGE_AMOUNT, CHANGE_SCORE} = questionsSlice.actions;

export default questionsSlice.reducer;