// console.log('hola mundo');

const intialState = [{
    id: 1,
    todo:'comprar pan',
    done: false
}];

const todoReducer = (state = intialState, action) => {


    if (action?.type === 'agregar'){
        return [ ... state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo:'comprar pan',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);