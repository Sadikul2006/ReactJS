
function Hello() {
    
    // function getName(yourname) {
    //     return yourname
    // }
    
    // function handleClick() {
    //     alert("Button was Clicked!")
    // }

    // const handleInput = (e) => {
    //     console.clear()
    //     console.log("Value : ", e.target.value)
    // }

    // const handleMouseOver = () => console.log("Mouse is over the text!")
    // const handleDoubleClick = () => console.log("Double Clicked!")
    // const name1 = "Sadikul Seikh"
    // const name2 = "Elia"
    // return (
    //     <>
    //         <h1>Hello {getName(name1)}</h1>
    //         <h2>Bye {getName(name2)}</h2>
    //         <button onClick={handleClick}>Click Me</button>
    //         <br/>
    //         <input type="text" onChange={handleInput} placeholder="Type Samething"/>
    //         <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem, ipsum dolor sit </p>
    //     </>
    // )

    const fruits = ["Apple", "Banana", "Orange"]

    return (
        <div>
            <h2>Fruits List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li>{index} - {fruit}</li>
                ))}
            </ul>
        </div>
    )
}
export default Hello