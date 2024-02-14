import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/page-not-found'
import Login from '../pages/login'
import Userlayout from '../layouts/user-layout'
import AdminLayout from '../layouts/admin-layout'
import UserChats from '../pages/user/user-chats'
import AllUsers from '../pages/admin/all-users'
import AllChats from '../pages/admin/all-chats'
import AdminChat from '../pages/admin/chat'
import Register from '../pages/register'
function RoutesContainer() {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/' element={<Userlayout />}>
                    <Route path="chats" element={<UserChats />} />
                </Route>
                <Route path='/admin' element={<AdminLayout />}>
                    <Route path="chat/:id" element={<AdminChat />} />
                    <Route path="chats" element={<AllChats />} />
                    <Route path="users" element={<AllUsers />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default RoutesContainer