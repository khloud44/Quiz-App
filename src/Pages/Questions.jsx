import { Box, Button, CircularProgress, Typography } from '@material-ui/core'
import { decode } from 'html-entities'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import UseAxios from '../Hooks/UseAxios'
import { CHANGE_SCORE } from '../Redux/questionsSlice'

const getRandomInt = max=>{
  return Math.floor(Math.random() * Math.floor(max));
}

export const Questions = () => {
  const {question_category, question_difficulty, question_type, amount_of_question, score}=useSelector(state=>state.questions)
  const apiUrl= `api.php?amount=${amount_of_question}&category=${question_category}&type=${question_type}&difficulty=${question_difficulty}`
  const {response , loading}=UseAxios({url: apiUrl});

  const [questionIndex , setQuestionIndex] = useState(0);
  const [options , setOptions] =useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(response?.data.results.length){
      const question = response.data.results[questionIndex];
      let answers = [...question.incorrect_answers, question.correct_answer];
      answers.splice( getRandomInt(question.incorrect_answers.length),0,question.correct_answer ); 
      setOptions(answers)
    }
  },[response , questionIndex])
  

  if(loading){
    return(
        <Box mt={20}>
            <CircularProgress/>    
        </Box> 
    )
  }

  const handleClickAnswer=(e)=>{
    const question = response.data.results[questionIndex];
    if(e.target.textContent === question.correct_answer){
      dispatch(CHANGE_SCORE(score+1));
    }

    if(questionIndex + 1 < response.data.results.length){
      setQuestionIndex(questionIndex +1);
    }else{
      navigate('/score');
    }
  }


  return (
    <Box mt={3}>
      <Typography  varian="h4">Question {questionIndex+1}</Typography>
      <Typography mt={5}>{decode(response.data.results[questionIndex].question)}</Typography>
      {options.map((data,id)=>(
        <Box mt={2} key={id}>
            <Button varian="contained" onClick={handleClickAnswer}>{decode(data)}</Button>
        </Box>
      ))}
      <Box mt={5}>Score: {score} / {response.data.results.length}</Box>
    </Box>
  )
}
