import React from 'react';
import ProfileInfo from './components/profile-info/profile-info'
import MyPost from './components/my-posts/my-posts'

import './profile.css';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPost />
        </div>
    );
};

export default Profile;