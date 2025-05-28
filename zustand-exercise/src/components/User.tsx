import { useState } from "react"
import { useUserStore } from "./user.store"

const User = () => {
    const {users, addUser, deleteUser}  = useUserStore()

    const [fnameInput, setFnameInput] = useState<string>('')
    const [lnameInput, setLnameInput] = useState<string>('')
    const [ageInput, setAgeInput] = useState<number>(0)
    const [hobbyInput, setHobbyInput] = useState<string>('')

    const handleForm = (e) => {
        e.preventDefault()
        addUser({
            firstname: fnameInput,
            lastname:lnameInput,
            age:ageInput,
            hobbies:hobbyInput
        })
    }


  return (
    <div>
        <h3>User List:</h3>
        <ul>
            {users.map(user => (
                <li key={user.firstname}>
                    {user.firstname} {user.lastname} : {user.age} - {user.hobbies}
                    <button onClick={() => deleteUser(user.firstname)}>Delete</button>
                </li>
            ))}
        </ul>
        <form onSubmit={handleForm}>
            <input type="text" placeholder="firstname" value={fnameInput} onChange={ e => setFnameInput(e.target.value)}/>
            <input type="text" placeholder="lastname" value={lnameInput} onChange={ e => setLnameInput(e.target.value)}/>
            <input type="number" placeholder="age" value={ageInput} onChange={ e => setAgeInput(e.target.value)}/>
            <input type="text" placeholder="hobbis" value={hobbyInput} onChange={ e => setHobbyInput(e.target.value)}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default User