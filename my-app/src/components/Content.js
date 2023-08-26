import React, { Component } from 'react'
import { savedPosts } from '../posts.json'
import PostItem from './PostItem.js'
import Loader from './Loader.js'
import css from './css/Content.module.css'

export class Content extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      })
    }, 2000)
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Posts</h1>
        </div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ?
            <PostItem savedPosts={savedPosts} /> : <Loader />
          }
          {/* {savedPosts.map(post => {
            return (
              <div className={css.SearchItem} key={post.title}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} />
                <p>{post.description}</p>
              </div>
            )
          })} */}
        </div>
      </div>
    )
  }
}

export default Content