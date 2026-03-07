// import './App.css'
import styles from './Bye.module.css'
function Bye() {
    const users = [
        {firstName: "Sadikul", lastName: "Seikh", age: 20},
        {firstName: "Naznin", lastName: "Laskar", age: 22},
        {firstName: "Anie", lastName: "😊", age: 22}
    ]

    function fullName(user) {
        let full_name = user.firstName + " " + user.lastName;
        return full_name; 
    }

    return (
        <>
            <h2>Person Details</h2>
            {users.map((user, index) => (
                <li>{fullName(user)} is {user.age} years old</li>
            ))}
            {/* <p>Full Name: {fullName(user)}</p>
            <p>Age: {user.age}</p> */}
        </>
    )
}

export default Bye