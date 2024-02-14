import React from 'react'
import UserCard from './UserCard/UserCard'

function UsersList() {
    let usersList = ["Abid Ullah", "Muhammad Farhan", "Faizan Ahmed", "Lana Steiner", "Demi Wilkinson", "Demi Wilkinson", "Demi Wilkinson", "Demi Wilkinson", "Demi Wilkinson", "Demi Wilkinson"]

    return (
        <div>
            {usersList?.map((user, index) =>
                <UserCard key={index} title={user} />
            )}
        </div>
    )
}

export default UsersList