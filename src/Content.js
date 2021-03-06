import React from 'react'
import ReactDom from 'react-dom'

// 1.引入自定义组件
import Add from './Add.js'
import List from './List.js'
import Footer from './Footer.js'


export default class Content extends React.Component {
    constructor(){
        super()
        this.state={
            type:'All',
            list:[]
        }                                   
    }
        // 2.获取数据渲染页面---从本地存储中获取数据渲染，记得调用render
            componentWillMount(){
                const str=window.localStorage.getItem('todos')||'[]';
                this.state.list=JSON.parse(str);
                this.setState({})
            }

        // 3.手动实现数据的双向绑定--定义一个onChange事件
        // 3.1在展示数据的时候，定义一个onChang事件，将输入的数据与已存在的数据指向同一个指向this.state.list

        // 4.添加数据
            addData(newData){
                this.state.list.push(newData)
                this.setState({})
            }

        // 5.删除数据
            delData(id){
                this.state.list= this.state.list.filter(item=>{
                    return item.id !==id
                })
                this.setState({})
            }

        // 6.修改数据
        // 6.1双击时给元素添加editing的类，让输入框变成可编辑状态
        // 6.2要让数据能够真正的实现可编写，必须进行双向数据绑定---注册onchange事件
        // 只要数据改变就要调用this.setstate（{}）渲染
        
        // 7.this.setstate（{}）只会更新本组件及其子组件的数据，所以要在父组件中更新，才能更新全局的数据，子组件调用也会更新父组件的内容
            dataUpdate(){
                this.setState({})
            }

        // 8.将数据存入到本地存储中，利用生命周期函数
            componentWillUpdate(){
                window.localStorage.setItem('todos',JSON.stringify(this.state.list))
            }
        // 9.更改完成状态与否--改变isCompleted的属性值--只需将状态值取反就好

        // 10.底部剩余项帅选
            dataLeft(){
               const tepmData=this.state.list.filter(item=>{
                    return !item.isCompleted
                })
                return tepmData.length
            }

        // 11.清空已完成的任务  Clear completed
            clearCompleted(){
                this.state.list=this.state.list.filter(item=>{
                    return !item.isCompleted
                })
                this.setState({})
            }
            
        // 12.实现all active completed三者属性之间的切换
            // 12.1 定义一个获取属性值的函数，将属性值存放到this.state中
            setType(str){
                this.setState({
                    type:str
                })
            }
            
        // 13.根据不同的属性值获取不同的数据---判断switch--case
            // 13.1渲染前调用函数，把获取到的数据存起来，放在commonList中
            // 13.2把渲染的数据写活，赋值给要渲染的数据变量，注意：不能改变真正的数据值
            filterData(str){
                const list =this.state.list
                switch (str) {
                    case 'All':
                        return list;
                    case 'Active':
                        return list.filter(item=>{
                            return !item.isCompleted
                        } )
                    case 'Completed':
                        return list.filter(item=>item.isCompleted)
                }
                this.setState({})
            }


    render() {
        const commonList=this.filterData(this.state.type)
        return (
            <section className="todoapp">
               <Add addData={this.addData.bind(this)}/>
               {/* <List dataUpdate={this.dataUpdate.bind(this)} delData={this.delData.bind(this)}  commonList={this.state.list}/> */}
               <List dataUpdate={this.dataUpdate.bind(this)} delData={this.delData.bind(this)}  commonList={commonList}/>
               <Footer  setType={this.setType.bind(this)} clearCompleted={this.clearCompleted.bind(this)} dataLeft={this.dataLeft()}/>
		    </section>
                    )

        
    }
}
