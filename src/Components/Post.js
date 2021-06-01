import React, { Component } from 'react'
import styles from './Post.module.css'

 class Post extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[]
         }
     }
     
     componentDidMount(){
         fetch('https://my-json-server.typicode.com/typicode/demo/posts')
         .then(res => res.json())
         .then(data => this.setState({posts:data}))
     }
     handleTruncate=(str,n)=>{
        return str && str.length > n ? str.substr(0,n) + "..." : str
     }

    render() {
        const postItem=this.state.posts && this.state.posts.map((data)=>(
            <div className={styles.postCard} key={data.id}>
                <h3>{this.handleTruncate(data.title,10)}</h3>
                
            </div>
        ))
        return (
            <div className={styles.postContainer}>
                {postItem}
            </div>
        )
    }
}
export default Post
