import {FormEvent, useEffect, useState} from 'react'
import {v4 as uuid4} from 'uuid'
import {Container, Header, Form, Content, SortMenu, TasksContainer, Task, Status} from '../styles/home'
import {TaskProps} from "../utils/interface";
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../store/todos/reducers';

export default function Demo() {
    const [task, setTask] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [idTaskToEdit, setIdTaskToEdit] = useState<string>('')
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [taskList, setTaskList] = useState<TaskProps[]>([])
    const listTodos = useSelector((state: any) => state.todo.todos);

    const dispatch = useDispatch();

    useEffect(()=>{
        setTaskList(listTodos)
    },[dispatch])

    useEffect(()=>{
        dispatch(
            setTodos(taskList)
        );
    },[taskList])

    const handleAdd = (event: FormEvent) => {
        event.preventDefault()
        setError('')

        if (!task) {
            setError('*Không được để trống')
            return
        }

        setTaskList([...taskList, {
            id: uuid4(),
            task: task,
            isCompleted: false,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        }])

        setTask('')
    }

    const handleDeleteTask = (id: string) => {
        const newTaskList = taskList.filter(task => task.id !== id)

        setTaskList([...newTaskList])
    }


    const handleEdit = (id: string) => {
        setError('')
        setIdTaskToEdit(id)

        const selectedTask = taskList.filter(task => task.id === id)
        setTask(selectedTask[0].task)

        setIsEdit(true)
    }

    const handleSave=(id: string, event: FormEvent) => {
        event.preventDefault()
        setError('')

        if (!task) {
            setError('*Không được để trống')
            return
        }

        const updatedTaskList = taskList.map(taskItem => {

            if (taskItem.id === id) {
                return{
                    ...taskItem,
                    task:task,
                    updatedAt:Date.now()
                }
            }
            return taskItem
        })

        setTaskList([...updatedTaskList])

        handleCancel()
    }

    const handleCancel=() => {
        setTask('')
        setIdTaskToEdit('')
        setIsEdit(false)
    }

    const onCompletedTask = (id: string) => {
        const setCompletedTaskList = taskList.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    isCompleted:!task.isCompleted
                }
            }
            return task
        })

        setTaskList([...setCompletedTaskList])
    }

    return (
        <Container>
            <Header>
                <div/>
                <section>
                    <h1>TODO-APP-NEXTJS</h1>

                    {isEdit ? (
                        <Form onSubmit={handleAdd}>
                            <input type="text" placeholder="Nhập task" value={task}
                                   onChange={(e) => setTask(e.target.value)}/>
                            <button type="submit" onClick={(e) => handleSave(idTaskToEdit, e)} className="edit">
                                Lưu
                            </button>
                            <button type="button" onClick={handleCancel} className="cancel">
                                Thoát
                            </button>
                        </Form>
                    ) : (
                        <Form onSubmit={handleAdd}>
                            <input type="text" placeholder="Nhập task" value={task}
                                   onChange={(e) => setTask(e.target.value)}/>
                            <button type="submit" className="add">
                                Thêm
                            </button>
                        </Form>
                    )}
                    {error && <p>{error}</p>}
                </section>
            </Header>

            <Content>
                <TasksContainer>
                    {taskList.length === 0 && <p>Rỗng...</p>}

                    {taskList?.map(task => {
                        return (
                            <Task
                                key={task.id}
                            >
                                <label>
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        name="checkbox"
                                        onChange={() => onCompletedTask(task.id)}
                                        checked={task.isCompleted}
                                        disabled={isEdit}
                                    />
                                    <span/>
                                </label>
                                <p className={task.isCompleted ? "checked" : ""}>{task.task}</p>
                                <button
                                    type="button"
                                    className="edit"
                                    onClick={() => handleEdit(task.id)}
                                    disabled={isEdit}
                                >
                                    Sửa
                                </button>
                                <button
                                    type="button"
                                    className="delete"
                                    onClick={() => handleDeleteTask(task.id)}
                                    disabled={isEdit}
                                >
                                    Xóa
                                </button>
                            </Task>
                        )
                    })}
                </TasksContainer>
            </Content>
        </Container>
    )
}