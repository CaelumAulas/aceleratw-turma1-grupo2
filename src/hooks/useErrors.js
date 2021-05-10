import { useState } from 'react';

export default function useErrors(validations){
    const stateInitial = newStateInitial(validations);
    const [errors, setErrors] = useState(stateInitial);

    function validateFields(e)
    {
        const { name, value } = e.target;
        const newState = { ...errors };
        newState[name] = validations[name](value);
        setErrors(newState);
    }

    function send()
    {
        for(let field in errors){
            if(!errors[field].valid){
                return false;
            }
        }

        return true;
    }

    return [errors, validateFields, send];
}

function newStateInitial(validations)
{
    const stateInitial = {};
    for(let field in validations){
        stateInitial[field] = { valid: true, text: "" };
    }

    return stateInitial;
}