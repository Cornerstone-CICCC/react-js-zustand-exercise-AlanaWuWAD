import {create} from "zustand"

interface User {
    firstname:string,
    lastname:string,
    age:number,
    hobbies:string
}

type UserStoreState = {
    users: User[],
    addUser: (user: User) => void,
    deleteUser: (firstname:string) => void
}

export const useUserStore = create<UserStoreState>((set) => ({
    users:[{
        firstname:'guest',
        lastname:'guest',
        age:0,
        hobbies: ''
    }],
    addUser : (user) => {
        set( (state) => ({users: [...state.users, user]}))
    },
    deleteUser: (firstname) => set( (state) => ({
        users:state.users.filter(user => user.firstname !== firstname)
    }))
}))