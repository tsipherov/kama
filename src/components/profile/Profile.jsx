import React from 'react'

const Profile = ({ profileUserName}) => {
    return (
        <div>
            <div className='profile-header d-flex ml-5 mb-5'> 
                <img src="https://imgur.com/I80W1Q0.png" className="user-ava" alt="userAvatar" />
                <h2 className="profile-user-name">{ profileUserName}</h2>
            </div>
            <div className="user-info">
                <ul>
                    <li>
                        birthday
                    </li>
                    <li>
                        city
                    </li>
                    <li>
                        profecy
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Profile
