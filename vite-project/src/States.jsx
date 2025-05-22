// import { useState } from "react";
// export default function Person() {
//   const [person, setPerson] = useState({ name: "John", age: 100 });

// //   // BAD - Don't do this!
// //   const handleIncreaseAge = () => {
// //     // mutating the current state object
// //     person.age = person.age + 1;
// //     setPerson(person);
// //   };

//   // GOOD - Do this!
//   const handleIncreaseAge = () => {
//     // copy the existing person object into a new object
//     // while updating the age property
//     const newPerson = { ...person, age: person.age + 1 };
//     setPerson(newPerson);
//   };
//   const [person, setPerson] = useState({ name: "John", age: 100 });

// //   const handleIncreaseAge = () => {
// //     console.log("in handleIncreaseAge (before setPerson call): ", person);
// //     setPerson({ ...person, age: person.age + 1 });
// //     // we've called setPerson, surely person has updated?
// //     console.log("in handleIncreaseAge (after setPerson call): ", person);
// //   };
// const handleIncreaseAge = () => {
//     console.log("in handleIncreaseAge (before setPerson call): ", person);
//   setPerson((prev)=> ({ ...prev, age: prev.age + 1 }));
//   setPerson((prev)=> ({ ...prev, age: prev.age + 1 }));
//   console.log("in handleIncreaseAge (after setPerson call): ", person);
// };

//   // this console.log runs every time the component renders
//   // what do you think this will print?
//   console.log("during render: ", person);

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <button onClick={handleIncreaseAge}>Increase age</button>
//     </>
//   );
// const [value, setValue] = useState("");

//   return (
//     <input
//       type="text"
//       value={value}
//       onChange={(event) => {
//         console.log("event: ", event);
//         console.log("event.target: ", event.target);
//         setValue(event.target.value)}}
//     />
//   );



// }

import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}
