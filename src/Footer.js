import React from 'react'
import ReactDom from 'react-dom'

export default class Add extends React.Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.dataLeft}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={e=>{
                    this.props.clearCompleted()
                }}>Clear completed</button>
            </footer>
        )
    }
}


