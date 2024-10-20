import React from 'react';
import './CommonInput.css'; // Ensure you have relevant styles for your inputs

const CommonInput = ({ label, type, value, onChange, name, options, autoComplete }) => {
    const inputId = `input-${name}`; // Base ID for the input group

    return (
        <div className="common-input">
            {type !== 'radio' ? (
                <>
                    <label htmlFor={inputId}>{label}</label>
                    {type === 'textarea' ? (
                        <textarea
                            id={inputId}
                            name={name}
                            value={value}
                            onChange={onChange}
                            autoComplete={autoComplete}
                        />
                    ) : (
                        <input
                            id={inputId}
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange}
                            autoComplete={autoComplete}
                        />
                    )}
                </>
            ) : (
                <fieldset>
                    <legend>{label}</legend>
                    <div className="radio-options">
                        {options.map((option) => {
                            const optionId = `${inputId}-${option.value}`; // Unique ID for each radio option
                            return (
                                <div className="radio-option" key={option.value}>
                                    <input
                                        type="radio"
                                        id={optionId}
                                        name={name}
                                        value={option.value}
                                        checked={value === option.value}
                                        onChange={onChange}
                                        autoComplete={autoComplete}
                                    />
                                    <label htmlFor={optionId}>{option.label}</label>
                                </div>
                            );
                        })}
                    </div>
                </fieldset>
            )}
        </div>
    );
};

export default CommonInput;
