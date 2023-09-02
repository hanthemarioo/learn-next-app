import Button from '@/components/Button'
import Input from '@/components/Input'
import React, { useState } from 'react'

export default function Index() {
    const [Num, setNum] = useState({})

    const result = () => {
        for (let resultNum = Num.firstNum; resultNum <= Num.secondNum; resultNum++) {
            if (resultNum > 1) {
                for (let i = 2; i < resultNum; i++) {
                    if (resultNum % i != 0) {
                        console.log(resultNum);
                    }
                }
            }
        }
    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
                    <Input inputType={'number'} inputName={'firstNum'} onChange={(e) => { setNum((prev) => { return { ...prev, firstNum: e.target.value } }) }} />
                    <Input inputType={'number'} inputName={'secondNum'} onChange={(e) => {
                        setNum((prev) => {
                            if ((Num.firstNum !== null) <= e.target.value) {   
                                return { ...prev, secondNum: e.target.value }
                            } else if (Num.firstNum == null) {
                                return 0
                            }
                        })
                    }} />
                    <div className='flex'>
                        <Button isDisabled={!(Num.firstNum && Num.secondNum)} onCLick={result} name={'Hitung'} />
                    </div>
                    <div>Bilangan prima dari {Num.firstNum} ke {Num.secondNum} adalah {}</div>
                </div>
            </div>
        </div>
    )
}
