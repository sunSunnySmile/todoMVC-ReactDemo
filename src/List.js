import React from 'react'
import ReactDom from 'react-dom'

export default class List extends React.Component {
    render() {
        const list=this.props.commonList
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                {
                    list.map(item=>{
                        return (
                            <li className="completed" key={item.id}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" checked />
                                    <label>{item.name}</label>
                                    <button className="destroy"></button>
                                </div>
                                <input className="edit" value="Create a TodoMVC template" onChange={e=>{
                                    this.state.list=e.target.value
                                    this.setState({})
                                }} />
                            </li>
                        )
                           
                        
                    })
                      
                }
                  
                   
                </ul>
            </section >
        )
    }
}