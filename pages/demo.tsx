import {useState} from 'react'
import {Container, Content, SortMenu} from '../styles/home'
import {useDispatch, useSelector} from 'react-redux';
import {setTodos} from '../store/todos/reducers';
import ListTask from "../components/listTask";
import FormTask from "../components/formTask";
import styled from "styled-components";

export default function Demo() {
    const listTodos = useSelector((state: any) => state.todo.todos);
    const [sortedBy, setSortedBy] = useState<'all' | 'active' | 'completed'>('all')

    const dispatch = useDispatch();

    const handleDeleteTask = (id: string) => {
        const newTaskList = listTodos.filter((task: any) => task.id !== id)

        dispatch(
            setTodos([...newTaskList])
        );
    }

    const handleDeleteCompletedTask = () => {
        const newTaskList = listTodos.filter((task: any) => task.isCompleted !== true)

        dispatch(
            setTodos([...newTaskList])
        );
    }

    const onCompletedTask = (id: string) => {
        const setCompletedTaskList = listTodos.map((task: any) => {
            if (task.id === id) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task
        })

        dispatch(
            setTodos([...setCompletedTaskList])
        );
    }

    return (
        <Container>
            <FormTask/>

            <Content>
                <SortMenu>
                    <Sort>
                        <span className={sortedBy === 'all' ? 'selected' : ''} onClick={() => setSortedBy('all')}>
                            Tất cả
                        </span>
                        <span className={sortedBy === 'active' ? 'selected' : ''} onClick={() => setSortedBy('active')}>
                            Chưa hoàn thành
                        </span>
                        <span className={sortedBy === 'completed' ? 'selected' : ''}
                              onClick={() => setSortedBy('completed')}>
                            Hoàn thành
                        </span>
                    </Sort>
                    <button type="button" onClick={handleDeleteCompletedTask}>
                        Xóa các task đã chọn
                    </button>
                </SortMenu>

                <ListTask
                    taskList={listTodos}
                    sortedBy={sortedBy}
                    onCompletedTask={onCompletedTask}
                    handleDeleteTask={handleDeleteTask}
                />
            </Content>
        </Container>
    )
}
export const Sort = styled.div`
  display: flex;
  gap: 15px;

  .selected {
    text-decoration: underline;
    font-weight: 700;
  }

  span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;