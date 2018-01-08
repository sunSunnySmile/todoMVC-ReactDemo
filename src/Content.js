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


    render() {
        return (
            <section className="todoapp">
               <Add addData={this.addData.bind(this)}/>
               <List delData={this.delData.bind(this)}  commonList={this.state.list}/>
               <Footer/>
		    </section>
                    )

        
    }
}
