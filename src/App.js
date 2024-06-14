import './components/styles.css'
import FormComponent from "./components/FormComponent"
import ResultsComponent from "./components/ResultsComponent"
import StatisticsComponent from "./components/StatisticsComponent"
import { useState } from 'react'


function App()  {
  const [userNumber,setUserNumber] = useState('')
  const [machineNumber,setMachineNumber] = useState(Math.floor(Math.random() * 101))
  const [attempts,setAttempts] = useState([])

  const props = {
    attempts:attempts,
    userNumber:userNumber
  }


  function handleSubmit(e) {
    e.preventDefault()
    setUserNumber(e.target.userNumber.value)
    setAttempts([...attempts,e.target.userNumber.value])
    e.target.userNumber.value = ''
    
  }




  return (
    <>
      <h1>Guess the number game</h1>
        <div>
          <FormComponent onSubmit={handleSubmit}/>
        </div>
       <hr />
        <div>
          <ResultsComponent userNumber={userNumber} machineNumber={machineNumber}/>
        </div>
      <hr />
        <div>
          <StatisticsComponent props={props}/>
        </div>
     
    </>
  );
}
export default App;