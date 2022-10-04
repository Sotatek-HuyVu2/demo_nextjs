import {TasksContainer, Task} from '../styles/home'
import styled from "styled-components";
import FormEdit from "./formEdit";
import {useState} from "react";
import moment from "moment";

interface Props {
    taskList: Array<any>;
    sortedBy: string;
    onCompletedTask: (id: string) => void;
    handleDeleteTask: (id: string) => void;
}

export default function ListTask(props: Props) {
    const {
        taskList,
        sortedBy,
        onCompletedTask,
        handleDeleteTask
    } = props

    const [arrayEdit, setArrayEdit] = useState<Array<string>>([])

    const handleEdit = (id: string) => {
        let arr: Array<string> = [...arrayEdit]
        if (arr.includes(id)) {
            arr = arr.filter((a) => a !== id)
        } else {
            arr.push(id)
        }
        setArrayEdit(arr)
    }

    const onCancel = (id: string) => {
        handleEdit(id)
    }

    return (
        <TasksContainer>
            {taskList.length === 0 && <p>Rỗng...</p>}

            {taskList?.map(task => {
                return (
                    <Task
                        key={task.id}
                        style={
                            (sortedBy === 'active' && task.isCompleted === false) ||
                            (sortedBy === 'completed' && task.isCompleted === true) ||
                            (sortedBy === 'all')
                                ? {display: "inherit"}
                                : {display: "none"}}
                    >
                        <Flex>
                            <div className="item">
                                <label>
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        name="checkbox"
                                        onChange={() => onCompletedTask(task.id)}
                                        checked={task.isCompleted}
                                    />
                                    <span/>
                                </label>
                                <TaskContent>
                                    <div>
                                        <p className={task.isCompleted ? "checked" : ""}>{task.task}</p>
                                        <span className={task.isCompleted ? "checked" : ""}>{task.content}</span>
                                    </div>
                                    <div className="date">
                                        {!task.isCompleted ? (
                                            <>Cần hoàn thành lúc: <span>{task.completedDate}</span></>
                                        ) : (
                                            <><span>Đã hoàn thành</span></>
                                        )}
                                    </div>
                                </TaskContent>
                                <button
                                    type="button"
                                    className="edit"
                                    onClick={() => handleEdit(task.id)}
                                >
                                    Sửa
                                </button>
                                <button
                                    type="button"
                                    className="delete"
                                    onClick={() => handleDeleteTask(task.id)}
                                >
                                    Xóa
                                </button>
                            </div>
                            {arrayEdit.includes(task.id) &&
                                <FormEdit task={task} onCancel={onCancel}/>
                            }
                        </Flex>
                    </Task>
                )
            })}
        </TasksContainer>
    )
}
export const TaskContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  span, .date span {
    font-size: 14px;
    color: gray;
  }

  .date {

  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .edit {
      margin: 0 15px;
    }
  }
`;