import React from 'react'
import css from './css/PostItem.module.css'

function PostItemAPI(props) {
  return (
    props.savedPosts.map(post => {
        const {id, user, type, tags, webformatURL} = post
        return (
            <div className={css.SearchItem} key={post.id}>
            <p>Artwork type: {type}</p>
            <p>Artist: {user}</p>
            <img src={webformatURL} />
            <p>Tags: {tags}</p>
            </div>
        )
    })
  )
}

export default PostItemAPI