import { atom } from "recoil";
export const todosatom=atom({
    key:"todosatom",
    default:[]
})
export const filterAtom=atom({
    key:"filterAtom",
    default:""
})
export const filteredTodosAtom=atom({
    key:"filteredTodosAtom",
    get:({get})=>{
        const todos=get(todosatom);
        const filter=get(filterAtom);
        const filteredTodos=todos.filter((todo)=>{
            return (todo.title.includes(filter)||todo.about.includes(filter) )});
        return filteredTodos;
    }
})