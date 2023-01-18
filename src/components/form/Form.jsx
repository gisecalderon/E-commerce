import React from 'react'

const Form = () => {

    const [userData, setUserData] = useState({name:"", lastName:"", email:"", telefono:""})
    const handleSubmit = ( event )=>{
        event.preventDefault()
        console.log(userData)
    }
const handleKey = (event)=>{
    console.log(event)
}
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Nombre' 
                name='name' 
                value={userData.name}
                onChange={(event)=>setUserData({...userData, name: event.target.value})}
                onKeyDown={handleKey}
                />
                <input 
                type="text" 
                placeholder='Apellido'
                name='lastname' 
                onChange= {(event)=> setUserData({...userData, lastName: event.target.value})} 
                value={userData.lastName} 
                />
                <input 
                type="text" 
                placeholder='Email'
                name='email' 
                onChange= {(event)=> setUserData({...userData, email: event.target.value})} 
                value={userData.email} 
                />
                <input 
                type="text" 
                placeholder='Telefono'
                name='telefono' 
                onChange= {(event)=> setUserData({...userData, telefono: event.target.value})} 
                value={userData.telefono} 
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form