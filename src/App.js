import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Learn In Content</p>
        <p>👈</p>
       </StepMessage>

       <StepMessage step={2}>
        <p>read Children Prop</p>
        <p>😎</p>
       </StepMessage>
    </div>
  );
}

 function Steps () {
const [step, setStep] = useState(1);
// const [test, setTest] = useState({ name: 'Ayman' });
const [isOpen, setisOpen] = useState(true);

function handelPrevious () {

  if (step > 1) setStep((s) =>  (s - 1));
}

function handelNext () {
  if (step < 3) setStep((s) =>  (s + 1));
// test.name = 'Saleh';
  // setTest({name:"Saleh"});
}

  return (

    <div>
    <button className="close" onClick={() => setisOpen((is) => (!is))}> &times; </button>

    { isOpen && (
    <div className="steps">
    <div className="numbers">
      <div className={step >= 1 ? "active" : "" }>1</div>
      <div className={step >= 2 ? "active" : "" }>2</div>
      <div className={step >= 3 ? "active" : "" }>3</div>
    </div>

  
       <StepMessage step={step}>
       {messages[step-1]}
      <div className='buttons'>
       <Button
       backgroundColor="#e7e7e7"
       color= "#333"
       onClick ={() => alert(`learn how to ${messages[step - 1]}`)}
       >
        Learn how
       </Button>
       </div>
       </StepMessage>

    <div className="buttons">
      <Button
       backgroundColor="#7950f2"
       color= "#fff"
       onClick ={handelPrevious}
       ><span>👈</span> Previous</Button>
    
    <Button
       backgroundColor="#7950f2"
       color= "#fff"
       onClick ={handelNext}
       >Next<span>👈</span></Button>

    </div>
    </div>
    )
    }
    </div>
  );
}

function StepMessage({step, children}) {
  return (
    <div className="message">
    <h3>Step {step}</h3>
     {children}
     </div>
  );
  }
  
function Button({backgroundColor, color, onClick, children}) {
    return (     
    <button
    style={{backgroundColor: backgroundColor, color: color}}
    onClick= {onClick}
    >
     {children}
     </button>
);
}

