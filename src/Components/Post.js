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
         fetch('http://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(data => this.setState({posts:data}))
     }
     handleTruncate=(str,n)=>{
        const title = str && str.length > 10 ? str.substr(0,) 
     }

    render() {
        const postItem=this.state.posts && this.state.posts.map((data)=>(
            <div className={styles.postCard} key={data.id}>
                <h3>{this.handleTruncate(data.title,10)}</h3>
                <p>{data.body}</p>
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
