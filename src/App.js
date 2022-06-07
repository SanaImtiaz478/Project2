import React ,{useState} from 'react'
import Login from './Final'
import Card from './Card'
import {Data} from './Data'
function App() {
  
  
  const [isSubmitted, setIsSubmitted] = useState(true);
 

  return(
<div>
<Login></Login>
</div>

  )
}
export default App;