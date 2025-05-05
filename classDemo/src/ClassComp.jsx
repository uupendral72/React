import { Component } from "react";

class ClassComp extends Component
{
    constructor()
    {
        console.log("Constructor Called")
        super() 
        {
            this.state={ count:0}
        }
    }
    shouldComponentUpdate()
    {
       const res= confirm("Do You Really want to upadte");
       
       if(res)
       {
        return true
       }
       else{
         return false
       }
        
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate called")
    }
    render()
    {
        console.log("render Called")
        return(
            <div>
            <h1> I am Class</h1>
            <p>{this.state.count}</p>
            <button onClick={()=>this.setState({count:this.state.count - 1})}>-</button>
            <button onClick={()=> this.setState({count:0})}>Reset</button>
            <button onClick={()=>this.setState({count:this.state.count + 1 })}>+</button>
            <button onClick={()=>this.setState({count:"prasad"})}> click me</button>

            </div>
        )
    }
    componentDidMount()
    {
        console.log("Component did Mount Called")
    }
}

export default ClassComp