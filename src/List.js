import React from 'react'
import ReactDom from 'react-dom'

export default class List extends React.Component {
    constructor(){
        super()
        this.state={
            isEditing:-1,
        }
    }
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
                            <li className={"completed"+(this.state.isEditing===item.id?' editing':'')} key={item.id}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" checked />
                                    <label onDoubleClick={e=>{
                                        this.state.isEditing=item.id
                                        this.setState({},()=>{
                                            this.refs[item.id].focus()
                                        })
                                    }}>{item.name}</label>
                                    <button className="destroy" onClick={e=>{
                                        this.props.delData(item.id)
                                    }}></button>
                                </div>
                                <input ref={item.id} onBlur={e=>{
                                    //当失去焦点的时候将数据改为不可编辑状态
                                    this.state.isEditing=-1
                                    this.setState({})
                                }} className="edit" value={item.name} onChange={e=>{
                                    item.name=e.target.value
                                    // this.setState({})
                                    this.props.dataUpdate()
                                    // 通过fef属性设置属性值，可以获取，然后设置获取焦点
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