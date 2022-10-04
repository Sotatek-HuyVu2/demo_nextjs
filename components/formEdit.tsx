import {Input} from 'antd';
import styled from "styled-components";
import {DatePicker, Space} from 'antd';
import moment from 'moment';
import {useState} from "react";
import {setTodos} from "../store/todos/reducers";
import {useDispatch, useSelector} from "react-redux";

export default function FormEdit(props: any) {
    const {task, onCancel} = props

    const dispatch = useDispatch();
    const {TextArea} = Input;
    const [name, setName] = useState<string>(task.task)
    const [content, setContent] = useState<string>(task.content)
    const [error, setError] = useState<boolean>(false)
    const [completedDate, setCompletedDate] = useState<any>(moment(task.completedDate))
    const listTodos = useSelector((state: any) => state.todo.todos);


    const handleChangeDate = (value: any) => {
        setCompletedDate(value)
    }

    const handleSave = () => {
        if (name) {
            const updatedTaskList = listTodos.map((taskItem: any) => {

                if (taskItem.id === task.id) {
                    return {
                        ...taskItem,
                        task: name,
                        content: content,
                        completedDate: moment(completedDate).format('DD/MM/YYYY hh:mm:ss'),
                        updatedAt: Date.now(),
                    }
                }
                return taskItem
            })

            dispatch(
                setTodos([...updatedTaskList])
            );

            onCancel(task.id)
        }else {
            setError(true)
        }
    }

    return (
        <Form>
            <Input status={error ? 'error' : ''} value={name} placeholder="Tên task"
                   onChange={(e) => setName(e.target.value)}/>
            <TextArea value={content} placeholder="Nội dung" onChange={(e) => setContent(e.target.value)}/>
            <Space direction="vertical" size={12}>
                <DatePicker
                    value={moment(completedDate)}
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{defaultValue: moment('00:00:00', 'HH:mm:ss')}}
                    onChange={handleChangeDate}
                />
            </Space>
            <button onClick={handleSave}>Lưu</button>
            <button onClick={() => onCancel(task.id)}>Thoát</button>
        </Form>
    )
}
export const Form = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
  margin-top: 20px;

  input {
    width: 200px;
  }
`;