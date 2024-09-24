"use client";
import { useState,ChangeEvent } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function CalculatorComponent() {
const [num1,setNum1]=useState<string>("")
const [num2,setNum2]=useState<string>("")
const [result,setResult]=useState<string>("")

const handleNum1Change=(e:ChangeEvent<HTMLInputElement>):void=>{
setNum1(e.target.value)
}

const handleNum2Change=(e:ChangeEvent<HTMLInputElement>):void=>{
    setNum2(e.target.value)
    }

const add=():void=>{
    setResult((parseFloat(num1)+parseFloat(num2)).toString())
}

const subtract=():void=>{
    setResult((parseFloat(num1)-parseFloat(num2)).toString())
}
const multiply=():void=>{
    setResult((parseFloat(num1)*parseFloat(num2)).toString())
}

const divide=():void=>{
    if(parseFloat(num2)!==0){
    setResult((parseFloat(num1)/parseFloat(num2)).toString())
}else{
    setResult("Error:division not possible")
}
};


const clear=():void=>{
    setNum1("")
    setNum2("")
    setResult("")
}
return(
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
<Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
<CardHeader>
          <CardTitle className="text-2xl font-bold">
            Simple Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-5">
<div className="flex flex-col space-y-2">
    <Label htmlFor="Num1">Number 1</Label>
    <Input
    placeholder="Enter First number"
    value={num1}
    onChange={handleNum1Change}
    type="number"/>
</div>
<div className="flex flex-col space-y-2">
<Label htmlFor="Num2">Number 2</Label>
    <Input
    placeholder="Enter Second number"
    value={num2}
    onChange={handleNum2Change}
    type="number"/>
</div>
 </div>

            <div className="grid grid-cols-4 gap-3">
                <Button className="font-bold text-2xl text-gray-700" variant='outline' onClick={add}>+</Button>
                <Button className="font-bold text-2xl text-gray-700" variant='outline' onClick={subtract}>-</Button>
                <Button className="font-bold text-2xl text-gray-700" variant='outline' onClick={multiply}>*</Button>
                <Button className="font-bold text-2xl text-gray-700" variant='outline' onClick={divide}>/</Button>
            </div>

            <div className="flex flex-col space-y-2">
                <Label htmlFor="result">Result</Label>
                <Input readOnly placeholder="Result" id="result" type="text"value={result}/>
            </div>
            <Button variant="outline" className="w-full font-bold" onClick={clear}>
            Clear
          </Button>
        </CardContent>
</Card>
    </div>
    </>
)
}