import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
// Created an inital state with empty values
  const initState = {
   name:"",
   cuisine:"",
   photo:"",
   ingredients:"",
   preparation:""
 };
 
//Set useState to be a new copy of initState
 const [formData, setFormData] = useState({...initState});
 

 //Created change handle
 const handleChange = ({target}) => setFormData({
    ...formData,
    [target.name]: target.value
 });
  
 //Created submit handler
  const handleSubmit = (event) =>{
    //added prevent default to avoid page from reloading
    event.preventDefault();
    const newRecipe = {
     name: formData.name,
     cuisine: formData.cuisine,
     photo: formData.photo,
     ingredients: formData.ingredients,
     preparation: formData.preparation
    }
     addRecipe(newRecipe);
    setFormData({...initState});
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="recipe-create">
            <td>
              <input onChange={handleChange} name="name" value={formData.name} placeholder="Name" required={true}/>
            </td>
            <td>
              <input onChange={handleChange} name="cuisine" value={formData.cuisine} placeholder="Cuisine" required={true}/>
            </td>
            <td>
              <input onChange={handleChange} name="photo" value={formData.photo} placeholder="Photo URL" required={true}/>
            </td>
            <td>
              <textarea onChange={handleChange} name="ingredients" value={formData.ingredients} placeholder="Ingredients" required={true}/>
            </td>
            <td>
              <textarea onChange={handleChange} name="preparation" value={formData.preparation} placeholder="Preparation" required={true}/>
            </td>
            <td>
              <button onChange={handleChange} type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
