import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
 const initState = {
   name:"",
   cuisine:"",
   photo:"",
   ingredients:"",
   preparation:""
 };
 
 const [formData, setFormData] = useState({...initState});
 
 const handleChange = ({target}) => setFormData({
    ...formData,
    [target.name]: target.value
 });
  
  const handleSubmit = (event) =>{
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
 
 
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="recipe-create">
            <td>
              <input onChange={handleChange} name="name" value={formData.name} placeholder="Name" />
            </td>
            <td>
              <input onChange={handleChange} name="cuisine" value={formData.cuisine} placeholder="Cuisine" />
            </td>
            <td>
              <input onChange={handleChange} name="photo" value={formData.photo} placeholder="Photo URL" />
            </td>
            <td>
              <textarea onChange={handleChange} name="ingredients" value={formData.ingredients} placeholder="Ingredients" />
            </td>
            <td>
              <textarea onChange={handleChange} name="preparation" value={formData.preparation} placeholder="Preparation" />
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
