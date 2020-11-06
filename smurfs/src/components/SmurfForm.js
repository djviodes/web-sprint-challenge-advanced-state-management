import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { fetchData } from '../store/actions/actions';

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
`

const StyledLabel = styled.label`
    font-size: 1.7rem;
    color: #00B5EE;
`

const StyledInput = styled.input`
    width: 35%;
    height: 4vh;
    font-size: 1.2rem;
    padding: 0 1%;
    border: 1px solid black;;
    border-radius: 50px;
    outline: none;
    margin: 1% 0;
`

const StyledButton = styled.button`
    width: 6%;
    height: 4vh;
    background-color: #00B5EE;
    border: none;
    border-radius: 50px;
    outline: none;
    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(0.9);
    }
`

const SmurfForm = () => {
    const { register, handleSubmit } = useForm();
    console.log(register)

    const onSubmit = (data) => {
        const newSmurf ={
            name: data.name,
            age: data.age,
            height: data.height,
            id: Date.now(),
        };
        console.log(newSmurf)
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
                fetchData(response);
            })
            .catch(error => {
                return error;
            })
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledLabel htmlFor='name'>Smurf's Name: </StyledLabel>
            <StyledInput 
                id='name' 
                type='text' 
                name='name' 
                placeholder='Smurf Name' 
                ref={register}
            />

            <StyledLabel htmlFor='age'>Smurf's Age: </StyledLabel>
            <StyledInput 
                id='age' 
                type='text' 
                name='age' 
                placeholder='Smurf Age' 
                ref={register}
            />

            <StyledLabel htmlFor='height'>Smurf's Height: </StyledLabel>
            <StyledInput 
                id='height' 
                type='text' 
                name='height' 
                placeholder='Smurf Height' 
                ref={register}
            />

            <StyledButton>Submit Smurf</StyledButton>
        </StyledForm>
    );
}

export default SmurfForm;