import React from 'react'
import Post from './Post'

const PostList = () => {
    return (
        <div>
            <h2>
                My Posts
            </h2>
            <ul>
                <li>
                    <Post postText=" Lorem " />
                </li>
                <li>
                    <Post postText="ipsum"/>
                </li>
                <li>
                    <Post postText="blablabla"/>
                </li>
            </ul>
        </div>
    )
}

export default PostList

