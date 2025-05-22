function ListItem (props)
{
    return <li>{props.animal}</li>
}


// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <ListItem key={animal} animal={animal} />;
//       })}
//     </ul>
//   );
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//       })}
//     </ul>
//   );
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") && <li key={animal}> {animal}</li>
//       })}
//     </ul>
//   );
// }

function List(props)
{
    if (!props.animals)
    {
        return <div> Loading...</div>
    }

    if (props.animals.length === 0)
    {
        return <div> There are no animals in the list!</div>
    }

    return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}


export default function RenderingList() {
    const animals = [];
    // const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
    
  
    return(
  <>
    <div>
      <h1>Animals:</h1>

      <List animals={animals} />
    </div>
  </>);
}
