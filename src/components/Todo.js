import React, {Component} from "react";


class Todo extends Component {

render () {
    return(
        <div>
          <ul>
           {this.props.items.map((items,index) => (
                    <li key = {index} onClick = {this.props.deleteTask.bind(this,index)}>
                     {items} 
                     </li>
                ))}
            </ul>


        </div>
        )
}
}

export default Todo;

