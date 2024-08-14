import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { filterAtom,filteredTodosAtom, todosatom } from "./store/atoms/todos"
import { useRef } from "react"

function App(){
  return <>
    <RecoilRoot>
      <Input></Input>
      <DisplayTodos></DisplayTodos>
    </RecoilRoot>
  </>
}
function Input(){
  const titleref=useRef();
  const aboutref=useRef();
  const setTodos=useSetRecoilState(todosatom);
  function addtodo(){
    console.log(titleref.current);
    setTodos((todos)=>[...todos,{
      title:titleref.current.value,
      about:aboutref.current.value
    }])
  }
  const todos=useRecoilValue(todosatom);
  console.log(todos)
  return <>
    <input placeholder="title" ></input>
    <input placeholder="about"></input>
    <button>Add todo</button>
  </>
}
function DisplayTodos(){
  const setFilter=useSetRecoilState(filterAtom);
  function setfilter(event){
    setFilter((filter)=>{
      return event.value;
    })
  }
  const filteredTodos=useRecoilValue(filteredTodosAtom);
  return<>
    <input type="text" onInput={setfilter}/>
    {filteredTodos.map((todo)=>{
      return <div>
        <h1>{todo.title}</h1>
        <h3>{todo.about}</h3>
      </div>
    })}
  </>
  
}
export default App