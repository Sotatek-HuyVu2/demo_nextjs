import styled from 'styled-components'

export const MenuComponent = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  gap:20px;
  a{
    text-decoration: none;
    color:#999;
    transition: 0.3s;
    font-size: 17px;
  }
  .active{
    color: #000;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  margin-top: 50px;
  width: 100vw;
  display: flex;
  padding: 0 1rem;
  gap:50px
`;

export const Header = styled.header`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 350px;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color:#000000
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 775px;
    width: 100%;
    margin: 0 1rem;
  }
  p{
    width: 100%;
    text-align: start;
    color: red;
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3.5rem;

  margin-top: 3rem;
  border: none;
  border-radius: 0.5rem;

  background-color: var(--gray-700);

  input {
    height:100%;
    flex: 1;
    background-color: transparent;
    outline: none;
    border:1px solid #000;
    border-radius: 5px;
    padding:6px 15px;
    &::placeholder {
      color: #999;
    }
  }

  button {
    border:1px solid #000;
    background-color: transparent;
    height: 100%;
    border-radius: 5px;
    padding:6px 15px;
    margin-left: 1rem;
    > svg {
      width: 1.5rem;
      height: auto;
    }

    &.add {
    }

    &.edit {
      border-radius: 5px;
    }

    &.cancel {
      border-radius: 5px;
    }
  }
`;

export const Content = styled.main`
  flex:1;
  border-radius: 0.5rem;
`;

export const SortMenu = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    button {
      border: none;
      color: #000000;
      background: transparent;
      outline: none;

      &.selected {
        font-weight: bold;
      }

      & + button {
        margin-left: 2rem;
      }
    }
  }

  > button {
    border: none;
    color: #000000;
    background: transparent;
    &:hover{
      text-decoration: underline;
    }
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      margin-top: 1.5rem;
    }
  }
`;

export const EmptyMessage = styled.p``;


export const TasksContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    margin: 1.5rem 0;
    color: #999;
  }
`;

export const Task = styled.div`
  width: 100%;
  transition: display 5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #999;

  label {
    margin: 0 1rem;
  }

  p {
    flex: 1;
    margin-left: 1rem;
    color:#000000;

    &.checked {
      text-decoration-line: line-through;
      color: #999;
    }
  }

  > button {
    background: transparent;
    margin-left: 1.5rem;
    padding:6px 15px;
    color:#000000;
    border: 1px solid #999;
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    &.edit {
    }

    &.delete {
      margin-right: 1.5rem;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 0.5rem 0;

  p {
    max-width: 110px;
    width: 100%;
    margin-right: 1rem;
    color:#000000;
    text-align: left;
  }

  > div {
    flex: 1;
    height: 0.75rem;
    border-radius: 0.375rem;
    padding: 0.125rem;
    background: #999;

    div {
      height: 100%;
      width: 100%;
      border-radius: 0.25rem;
      background: var(--blue);
    }
  }
`;

