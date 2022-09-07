import { Box, FormControl, TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_AMOUNT } from '../Redux/questionsSlice';

const TextFieldComponent = () => {
    const dispatch = useDispatch();
    const handleChange =(e) =>{
        dispatch(CHANGE_AMOUNT(e.target.value))
    }

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of Questions"
                    type="number"
                    size="small"
                ></TextField>
            </FormControl>
        </Box>
    )
}

export default TextFieldComponent