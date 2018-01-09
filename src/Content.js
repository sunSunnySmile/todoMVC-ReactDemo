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





    render() {
        return (
            <section className="todoapp">
               <Add addData={this.addData.bind(this)}/>
               <List dataUpdate={this.dataUpdate.bind(this)} delData={this.delData.bind(this)}  commonList={this.state.list}/>
               <Footer/>
		    </section>
                    )

        
    }
}
