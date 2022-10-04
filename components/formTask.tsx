import {Input} from 'antd';
import styled from "styled-components";
import {DatePicker, Space} from 'antd';
import type {RangePickerProps} from 'antd/es/date-picker';
import moment from 'moment';
import {useState} from "react";
import {setTodos} from "../store/todos/reducers";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuid4} from "uuid";

export default function FormTask() {
    const dispatch = useDispatch();
    const {TextArea} = Input;
    const [name, setName] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [completedDate, setCompletedDate] = useState<any>(moment())
    const listTodos = useSelector((state: any) => state.todo.todos);

    const range = (start: number, end: number) => {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    };

    const disabledDate: RangePickerProps['disabledDate'] = current => {
        return current && current < moment().endOf('day');
    };

    const disabledDateTime = () => ({
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
    });

    const handleChangeDate = (value: any) => {
        setCompletedDate(value)
    }

    const handleSubmit = () => {
        if (name) {
            dispatch(
                setTodos([...listTodos, {
                    id: uuid4(),
                    task: name,
                    content: content,
                    completedDate: moment(completedDate).format('DD/MM/YYYY hh:mm:ss'),
                    isCompleted: false,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                }])
            );
            setName('')
            setContent('')
            setCompletedDate(moment());
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <Form>
            <h2>Thêm task</h2>
            <Input status={error ? 'error' : ''} value={name} placeholder="Tên task"
                   onChange={(e) => setName(e.target.value)}/>
            <TextArea value={content} placeholder="Nội dung" onChange={(e) => setContent(e.target.value)}/>
            <Space direction="vertical" size={12}>
                <DatePicker
                    value={completedDate}
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    showTime={{defaultValue: moment('00:00:00', 'HH:mm:ss')}}
                    onChange={handleChangeDate}
                />
            </Space>
            <button onClick={handleSubmit}>Thêm</button>
        </Form>
    )
}
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 10px
`;