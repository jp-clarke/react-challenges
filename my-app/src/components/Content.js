import React, { Component } from 'react'
import { savedPosts } from '../posts.json'
import PostItem from './PostItem.js'
import Loader from './Loader.js'
import css from './css/Content.module.css'

export class Content extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoaded: false,
      posts: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      })
    }, 2000)
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    console.log(name)
    const filteredPosts = savedPosts.filter(post => {
      return post.name.toLowerCase().includes(name)
    })
    this.setState({
      posts: filteredPosts
    })
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput">Search:</label>
            <input
              type="search"
              id="searchInput"
              onChange={(event) => this.handleChange(event)}
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ?
            <PostItem savedPosts={this.state.posts} /> : <Loader />
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