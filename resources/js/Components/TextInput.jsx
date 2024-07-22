import React, { useState, useEffect, forwardRef, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, isDisabled = false, validate, ...props }, ref) {
    const input = ref ? ref : useRef();
    const [localValue, setLocalValue] = useState(props.value);

    useEffect(() => {
        setLocalValue(props.value);
    }, [props.value]);

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    const handleChange = (e) => {
        const { value } = e.target;
        if (!validate || validate(value)) {
            setLocalValue(value);
            if (props.onChange) {
                props.onChange(e);
            }
        }
    };

    const handleBlur = (e) => {
        if (props.onBlur) {
            props.onBlur(e);
        }
    };

    return (
        <input
            {...props}
            type={type}
            className={'border-gray-300 focus:border-blue-300 focus:ring-blue-300 rounded-md shadow-sm ' + className}
            disabled={isDisabled}
            ref={input}
            value={localValue}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
});
