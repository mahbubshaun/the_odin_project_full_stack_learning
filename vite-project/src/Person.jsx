import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

//   const handleIncreaseAge = () => {
//     console.log("in handleIncreaseAge (before setPerson call): ", person);
//     setPerson({ ...perso n, age: person.age + 1 });
//     // we've called setPerson, surely person has updated?
//     console.log("in handleIncreaseAge (after setPerson call): ", person);
//   };

//   // this console.log runs every time the component renders
//   // what do you think this will print?
//   console.log("during render: ", person);

  return (
    <>
      <input type="text" value={fName} onChange={event => setFname(event.target.value)}/>

      <p>Your first name is: {fName}</p>

      <input type="text" value={lName} onChange={event => setLname(event.target.value)}/>

      <p>Your last name is: {lName}</p>

      <p>Your full name is: {fName+lName}</p>
      
    
    </>
  );
}
