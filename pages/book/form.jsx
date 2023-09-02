import Button from '@/components/Button'
import Input from '@/components/Input'
import TextArea from '@/components/Textarea'
import React, { useState } from 'react'

export default function FormBook() {
    const [FormBook, setFormBook] = useState({})
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center">Book&apos;s Form</h1>
                <form className="space-y-4">
                    <div>
                        <Input 
                        validation={!FormBook.title} 
                        onChange={(e) => {
                            setFormBook((prev) => {
                                return {
                                    ...prev,
                                    title: e.target.value,
                                }
                            })
                        }}
                        inputName={'title'}
                        inputType={'text'}
                        validationDesc={"Title musn't be empty"} />
                    </div>
                    <div>
                        <TextArea
                        validation={!FormBook.content}
                        onChange={(e) => {
                            setFormBook((prev) => {
                                return {
                                    ...prev,
                                    content: e.target.value,
                                }
                            })
                        }}
                        tAName={'content'}
                        tAType={'text'}
                        validationDesc={"Content musn't be empty"} />
                    </div>
                    { }
                    <div className='flex'>
                        <Button isDisabled={!(FormBook.title && FormBook.content)} />
                    </div>
                </form>
            </div>
        </div>
    )
}
