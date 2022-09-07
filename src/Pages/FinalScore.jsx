import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_SCORE } from '../Redux/questionsSlice';

export const FinalScore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {score} = useSelector(state => state.questions);

  const hangleBackToSettings = ()=>{
      dispatch(CHANGE_SCORE(0));
      dispatch(CHANGE_AMOUNT(50));
      navigate("/");
  }

  return (
    <Box mt={3}>
      <Typography variant='h3' fontWeight="bold" mb={3}>
          Final Score {score}
      </Typography>
      <Button variant='outlined' onClick={hangleBackToSettings}>Back to Setings!</Button>
    </Box>
  )
}
