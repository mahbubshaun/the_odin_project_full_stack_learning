// function Item(props)
// {
    
//    //conditionally redering using ternary operator
//     // return <li>{props.isPacked ? <s>{props.name}</s> : props.name}</li>
    
//     // if (props.isPacked)
//     // {
//     //     return <li><s>{props.name}</s></li>
//     // }
//     // else
//     // {
//     //     return <li>{props.name}</li>
//     // }    

//     //Logical AND operator (&&) 

//     // return (
//     //     <li className="item">
//     //         {props.name} {props.isPacked && <span>✔</span>}

//     //     </li>
//     // )

//     // return (

//     //     <li className="item">

//     //         {props.isPacked ? props.name : props.name + "❌"}

//     //     </li>
//     // )

//     return (

//         <li className="item">
//             {props.name}
//             {props.importance >0 && ' '}
//             {
//                 props.importance > 0 && 
//                 <i>
//                     (Importance: {props.importance})
//                 </i>
//             }


//         </li>
//     )
  
 
    
// }



// export default function PackingList(){
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item name="Space suit" isPacked={true} importance={9}/>
//                 <Item name="Helmet" isPacked={true}  importance={2}/>
//                 <Item name="Food" isPacked={true}  importance={4}/>
//                 <Item name="Water" isPacked={false} importance={0}/>
//                 <Item name="Towel" isPacked={false} importance={7}/>
//                 <Item name="Toothbrush" isPacked={false} importance={0}/>
//                 <Item name="Socks" isPacked={false} importance={8}/>
//                 <Item name="Shampoo" isPacked={false} importance={0}/>
                
//             </ul>
//         </section>

    

//     )
// }

function Drink({ name }) {
    
   let plant, caffein, age;

    if (name === 'tea')
    {
       plant = 'leaf';
       caffein = '15–70 mg/cup';
       age = '4,000+ years';    
    }else{
        plant = 'bean';
       caffein = '80–185 mg/cup';
       age = '1,000+ years';   
    }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}