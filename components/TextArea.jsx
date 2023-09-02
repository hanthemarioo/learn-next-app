import React from 'react'

export default function TextArea({ tAName, tAType, validation, onChange, validationDesc }) {
    return (
        <div>
            <label htmlFor={tAName ?? 'ta_name'} className="block text-sm font-medium text-gray-700 capitalize">
                {tAName ?? 'Textarea Name'}
            </label>
            <textarea
                type={tAType ?? "text"}
                id={tAName ?? 'ta_name'}
                name={tAName ?? 'ta_name'}
                className={`mt-1 p-2 w-full border rounded-md ${validation ? 'border-red-500 focus:outline-red-400' : 'focus:outline-none focus:ring-blue-500 focus:border-blue-500'}`}
                onChange={onChange}></textarea>
            {validation && (
                <div className='text-sm text-red-500'>
                    {validationDesc ?? 'Field ini gaboleh kosong >///< kyaa'}
                </div>
            )}
        </div>
    )
}
