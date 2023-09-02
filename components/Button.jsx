import React from 'react'

export default function Button({ isDisabled, name, onCLick, type }) {
    return (
        <button
            disabled={isDisabled}
            type={type ?? ''}
            onClick={onCLick}
            className={`text-white rounded-lg h-[2.25rem] px-[.5rem] pb-[3px] ml-auto ${isDisabled ? 'bg-gray-500' : 'hover:bg-blue-600 bg-blue-500'}`}>
            {name ?? 'Simpan'}
        </button>
    )
}
