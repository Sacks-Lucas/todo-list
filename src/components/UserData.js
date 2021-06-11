import React from 'react'
import { useRecoilValue } from 'recoil'
import { userDataSelector } from '../selectors'

const UserData = () => {
    const user= useRecoilValue(userDataSelector)
    return (
        <h1>{user.name}</h1>
    )
}

export default UserData