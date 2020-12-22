import React from 'react'
import Profile from '../profile/Profile'
import PostList from './postList/PostList'

function Content() {
    return (
        <main className="content">
            <div className='container-profile-img'>

            <img src="https://lsreg.ru/wp-content/uploads/2019/02/115.jpg"
                className="profile-bgimage"
                alt="abstract geometric background" />
            </div>
            
            <Profile profileUserName="Tsiferov Sergii" />
            <PostList />
        </main>
    )
}

export default Content
