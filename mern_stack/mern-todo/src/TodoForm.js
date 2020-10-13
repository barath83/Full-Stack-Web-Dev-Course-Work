import React from 'react';
import {useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';

export const TodoForm = ({todo ,onSubmit}) => {


    const {register,handleSubmit} = useForm({defaultValues:{ text: todo?todo.text : ""},});
    const history = useHistory();

    const submitHandler = handleSubmit((data) => {
          onSubmit(data);
          history.push("/");
    })

    

    return (
        <div className="container">
            <div className="mt-3">
               <h3>Edit Todo Item</h3>
               <form onSubmit={submitHandler}>
                   <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input className="form-control" ref={register} type="text" name ="text" id="text"/>
                   </div>
                   <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Save Todo
                    </button>
                   </div>
               </form> 
            </div>
        </div>
        );
}