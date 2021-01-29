import React, { PureComponent } from 'react';
import './Recipe.css'

// Using class component

// class Recipe extends React.PureComponent {

//     constructor({title,calories,img}){
//         super(title,calories,img)
//         this.state = {
//             title : title,
//             calories : calories,
//             img :  img
//         }
        
//     }



//     render(){

//         return(
//             <div>
//                 <h1>{this.state.title}</h1>
//                 <p>{this.state.calories}</p>
//                 <img src={this.state.img} alt="problem"/>
//                 <h1></h1>
//             </div>
//         )
//     }
// }
// export default Recipe

// Using function component

function Recipe ({title,calories,img,ingredients}) {

   
        return(
            <div className="card">
                <h1>{title}</h1>
                <p>{calories}</p>
                <img src={img} alt="problem"/>
                <ol>
                    {ingredients.map(ingredient => {
                        return (
                        <li>{ingredient.text}</li>
                        )
                    })}
                </ol>
            </div>
        )
    
}
export default Recipe