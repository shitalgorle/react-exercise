// import React from 'react'; loop exercise

// export class ExerciseTwo extends React.Component {
//     render(){
//         return(
//             <div style={{backgroundColor:"white",padding:"2%",border: "2px solid black"}}>
                
//                 <h1>{"Fruit List"}</h1>
//            <ul>
//             <li>Apple</li>
//             <li>Banana</li>
//             <li>Mango</li>
//             <li>Orange</li>
//             <li>Cherry</li> 
//            </ul>
//         </div>
//         );
//     }
// }

// export default ExerciseTwo;


// *********************

import React from 'react';

export class ExerciseTwo extends React.Component {
    render(){
        const fruits =["Apple","Bannna","Mango","Orange","cherry"]
        return(
            <div style={{backgroundColor:"white",border: "2px solid black", height:"200px",width:"200px"}}>
                
                <h1>{"Fruit List"}</h1>
           <ul>
            {/* {fruits.map((item,index)=>( */}
                 {fruits.map((item)=>(

              <li>{item}</li>
    ))}
           </ul>
        </div>
        );
    }
}

export default ExerciseTwo;






