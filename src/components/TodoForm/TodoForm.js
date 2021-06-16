import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoForm = ({handleAddTodo}) => {

    const [{descripcion}, handleInputChange, reset] = useForm({
        descripcion: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (descripcion.trim().length != 0){
            
            if (descripcion.trim().length <= 1){
                return;
            }
            
            const newTodo = {
                id: new Date().getTime(),
                desc: descripcion,
                done: false
            };
    
            handleAddTodo(newTodo);
    
            reset();
        }
    }

    return (
        <>
             <h4>Agregar TODO</h4>
             <hr/>

             <form onSubmit={handleSubmit}>
                 <input
                    type="text"
                    name="descripcion"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={descripcion}
                 />
                 <button
                 className="btn btn-outline-primary mt-1 btn-block"
                 type="submit"
                 >
                     Agregar
                 </button>
             </form>  
        </>
    )
}
