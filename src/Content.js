import React from 'react'
import ReactDom from 'react-dom'

// 1.引入自定义组件
import Add from './Add.js'
import List from './List.js'
import Footer from './Footer.js'


export default class Content extends React.Component {
    render() {
        return (
            <section className="todoapp">
               <Add/>
               <List/>
               <Footer/>
               
                      
		    </section>
                    )

        
    }
}
