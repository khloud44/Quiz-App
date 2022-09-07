import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_TYPE } from '../Redux/questionsSlice'

const SelectField = ({label , optoins}) => {
    const dispatch = useDispatch();
    const [value , setValue]=useState("")

    const handleChange=(e)=>{
        setValue(e.target.value);
        switch(label){
            case "Category" :
                dispatch(CHANGE_CATEGORY(e.target.value));
                break;
            case "Difficulty" :
                dispatch(CHANGE_DIFFICULTY(e.target.value));
                break;
            case "Type" :
                dispatch(CHANGE_TYPE(e.target.value));
                break;
            default:
                return;
        } 
    }
    return (
        <Box mt={3} width="100%" >
            <FormControl size='small' fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange} >
                    {optoins.map(({id , name}) => (
                        <MenuItem value={id} key={id}>{name}</MenuItem>
                    ))}
    
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField