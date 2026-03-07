import { useState } from "react";

function Student() {
    const [student, setStudent] = useState({
        name: "Sadikul",
        gread: "A",
        city: "Deihi"
    })

    const changeCity = () => {
        setStudent({...student, city: "Kolkata"})
    }

    return (
        <div>
            <h2>Name : {student.name}</h2>
            <p>Grade : {student.gread}</p>
            <p>City : {student.city}</p>
            <button onClick={changeCity}>Change City</button>
        </div>
    )
}

export default Student