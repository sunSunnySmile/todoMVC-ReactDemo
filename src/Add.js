import React from 'react'
import ReactDom from 'react-dom'

export default class Add extends React.Component{
    render(){
        return(
            <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus />
           </header>
        )
    }
}

