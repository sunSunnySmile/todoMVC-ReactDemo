import React from 'react'
import ReactDom from 'react-dom'
import List from './List';

export default class Add extends React.Component{
    constructor (){
        super()
        this.state={
            name:''
        }
    }

    changeHandler(e){
        this.setState({
            name:e.target.value
        })
    }

    // 2.提交数据
    submitHandler(e){
        e.preventDefault();
        if (!this.state.name.trim()) return;
        this.props.addData({
            id:Math.random(),
            name:this.state.name,
            isCompleted:false
        })
        this.setState({})
        this.state.name=''
    }



    render(){
        return(
            <header className="header">
            <h1>todos</h1>
            <form onSubmit={this.submitHandler.bind(this)}>
                <input  onChange={this.changeHandler.bind(this)} value={this.state.name} className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
            
           </header>
        )
    }
}


// 1.手动实现数据的双向绑定，就是将input输入的数据和已存在的数据的指向指向同一块区域

// 2.先定义一个name=‘’，后面通过设置this.state的新值将其覆盖添加数据，就是当按回车键时将数据渲染到数据列表中---form表单提交



