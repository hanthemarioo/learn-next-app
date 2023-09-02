import React from 'react'

export default function Input({ inputName, inputType, validation, onChange, validationDesc, className }) {
    return (
        <div>
            <label htmlFor={inputName ?? 'input_name'} className="block text-sm font-medium text-gray-700 capitalize">
                {inputName ?? 'Input Name'}
            </label>
            <input
                type={inputType ?? 'text'}
                id={inputName ?? 'input_name'}
                name={inputName ?? 'input_name'}
                className={className ?? `mt-1 p-2 w-full border rounded-md ${validation ? 'border-red-500 focus:outline-red-400' : 'focus:outline-none focus:ring-blue-500 focus:border-blue-500'}`}
                onChange={onChange} />
            {validation && (
                <div className='text-sm text-red-500'>
                    {validationDesc ?? "Field ini gaboleh kosong >///< kyaa"}
                </div>
            )}
        </div>
    )
}
