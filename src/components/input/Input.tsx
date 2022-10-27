import React, { useCallback, useState, KeyboardEvent, ChangeEvent } from "react";

import './input.css';

type inputProps = {
    type: string,
    handleSubmit: Function,
};

export const Input = ({ type, handleSubmit }: inputProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');

    const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit(inputValue);
            setInputValue('');
        };
    }, [inputValue, handleSubmit]);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

    return (
        <input
            className="input"
            type={type}
            value={inputValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="Text to append or press enter to generate randomly"
        />
    );
};

export default Input;
