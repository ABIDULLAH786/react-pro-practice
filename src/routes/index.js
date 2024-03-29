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
import ConfirmationPage from '../pages/confirmation-page'
import ForgetPassword from '../pages/forget-password'
import NewPassowrdPage from '../pages/set-new-password'
function RoutesContainer() {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/set-new-password" element={<NewPassowrdPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify-email" element={<ConfirmationPage />} />

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