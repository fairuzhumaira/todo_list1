import React, {Component} from "react";
import Todo from "./Todo";

class Form extends Component{

    constructor(){
        super();
        this.state = {
            term: '',
            items: []
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    onDeleteHandler = index => {
        const deleteTask =[...this.state.items];
        deleteTask.splice(index,1);
        this.setState({
            items:deleteTask
        });

    };

    onFormHandler = (e) => {
        e.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    
    render(){
        return(
            <div>
            <form>
              <div>
            
            <input  type="text" 
                value={this.state.term} 
                className="todo-input" 
                onChange={this.onChangeHandler} />

            <button 
               className="add-button" 
               type="add-button"  
               onClick={this.onFormHandler}
               > ADD </button>
            
            </div>
            </form>

            <Todo deleteTask = {this.onDeleteHandler} items = {this.state.items} />

            </div>
      
      )
}
}
    
export default Form;