import { useState } from 'react';
import update from './UpdateEmp.module.css';
import Axios from 'axios';


function UpdateEmp(){

    const[newName,setNewName] = useState("")
    const[newSurname,setNewSurname] = useState("")
    const [newAge,setNewAge] = useState(0)
    const[newPost,setNewPost] =useState("")


    const updateEmployee =(id) =>{

        Axios.put('http://localhost:3002/updateEmp', {
          
          id:id,
          newName:newName,
          newSurname:newSurname,
          newAge:newAge,
          newPost:newPost
    
        })
      }
 
    
    return(

<body>  

    <form className={update.shemfane}>  

        <div className={update.Socontainer}>  
            <center> <h1>EMPLOYEE ADDITION</h1> </center>  
            
            <div>
                <label for="myfile">Select a file:</label>
            
                <input  className={update.input} type="file" id="myfile"  name="myfile" multiple="multiple" /> 
                
            </div> 
            
            <label> Firstname </label>   
            <input  className={update.input} type="text" name="firstname" placeholder= "Firstname" size="15" required  onChange={(event) => {setNewName(event.target.value);}}/>   
            <label> Lastname: </label>   
            <input  className={update.input} type="text" name="middlename" placeholder="Last name" size="15" required  onChange={(event) => {setNewSurname(event.target.value);}}/>   
            <label> Age: </label>    
            <input  className={update.input} type="number" name="age" placeholder="your age" size="15"required onChange={(event) => {setNewAge(event.target.value);}}/>   
            <label>   
            Phone :  
            </label>  
            <input  className={update.input} type="text" name="phone" placeholder="phone no." size="10" required/> 
            
            
            
            <label><b>Position</b></label>  
            <input  className={update.input} type="text" placeholder="Enter post" name="Post" required onChange={(event) => {setNewPost(event.target.value);}}/>  
            
            <button  type="submit" className={update.registerbtn} onClick={updateEmployee}>update EMPLOYEE</button> 
            
        </div>
    </form>  
</body>  

    )
}
  export default UpdateEmp;