import {  Box, Button ,CircularProgress, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import SelectField from '../Components/SelectField'
import TextFieldComponent from '../Components/TextFieldComponent';
import UseAxios from '../Hooks/UseAxios';
import formImag from '../assets/questions.jpg'


export const Setting = () => {
    const DifficultyOptions =[
        { id : "easy" , name : "Easy"},
        { id : "medium" , name : "Medium"},
        { id : "hard" , name : "Hard"}
    ];
    const typeOptions=[
        { id : "multiple" , name: "Muliple Choise"},
        { id : "boolean" , name: "True/False"}
    ]
    const {response, error, loading}=UseAxios({url:"/api_category.php"});
    const navigate = useNavigate();

    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress/>    
            </Box> 
        )
    }

    if(error){
        return (
            <Typography variant="h6" mt={20} color="red">
                Some Thing Went Wrong
            </Typography>
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/questions");
    };

    return (
        <form onSubmit={handleSubmit} fullWidth>
            <SelectField  optoins={response.data.trivia_categories} label="Category"/>
            <SelectField optoins={DifficultyOptions} label="Difficulty"/>
            <SelectField optoins={typeOptions} label="Type"/>
            <TextFieldComponent/>
            <Box mt={3} width="100%">
                <Button fullWidth variant='contained' color="primary" type="submit">Get Start</Button>
            </Box>
        </form>
    )
}
