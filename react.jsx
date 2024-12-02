import React from 'react'

const users = [{
  name : "Vinura Nanayakkara" ,
  designation : "Web Developer" ,
  salary : 25000 ,
  id:1,
} ,
{
  name : "Disura Nanayakkara" ,
  designation : "Full - Stack Developer" ,
  salary : 29000 ,
  id:2,
} ,
{
  name : "Prasad Nanayakkara" ,
  designation : "Front - End  Developer" ,
  salary : 25000 ,
  id:3,
} 

]

//const customernames =["Vinura","Kamal","Disura"]



function App() {
  
  return (
    <div>
      {users.map((data)=>{
      const {name , designation , salary ,id  } = data ;
      return(
        <div> 
          {...users}
        </div>
      )
      
      }
      )
      
      }
    </div>
  )
}

export default App
