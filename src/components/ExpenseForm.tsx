import React, {ChangeEvent, useState} from "react";

interface ExpenseData {
    title : string;
    price: number;
    date : string;
}
interface ExpenseFormProps {
    onSaveExpense : (expense: ExpenseData) => void;
}

// 단일 값 상태
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredPrice, setEnteredPrice] = useState('');
const [enteredDate, setEnteredDate] = useState('');

// 객체 상태
const [userInput, setUserInput] = useState({
    title: '',
    price: 0,
    date: ''
});

const inputDateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput(
        (prevState) => (
            {
                ...prevState,
                [name]: name === "date" ? new Date(value) : value
            }
        )
    );
};