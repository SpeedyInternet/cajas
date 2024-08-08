import React, { useState, useEffect, forwardRef, useRef } from 'react';
import PrimaryButton from './PrimaryButton';
export default forwardRef(function TextInputWithButton({
    type = 'text',
    className = '',
    isFocused = false,
    isDisabled = false,
    validate,
    icon = null, // Añadimos la prop icon
    onButtonClick = null, // Añadimos la prop onButtonClick
    buttonDisable = false, // Añadimos el estado del botón deshabilitado
    classNameButton = '', // Añadimos estilo para el buton
    ...props
}, ref) {
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
        <div className="relative flex items-center">
            <input
                {...props}
                type={type}
                className={'border-gray-300/100 focus:border-blue-300 focus:ring-blue-300 rounded-md shadow-sm pr-10 ' + className}
                disabled={isDisabled}
                ref={input}
                value={localValue}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {icon && (
                <PrimaryButton
                    type="button"
                    className={"absolute right-0 h-full flex items-center rounded-e-md " + classNameButton}
                    onClick={onButtonClick}
                    disabled={buttonDisable || false}
                >
                    {icon}
                </PrimaryButton>
            )}
        </div>
    );
});
