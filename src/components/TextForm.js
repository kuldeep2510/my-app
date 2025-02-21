import React,{useState} from 'react'


export default function TextForm(prop) {
      const handleUpClick=()=>{
            console.log("uppercase was clicked");
            let newText=text.toUpperCase();
            setText(newText)
            prop.showAlert("Converted to Uppercase","success")
      }
            const handleOnChange=(event)=>{
                  console.log("on change");
                  setText(event.target.value)
      }
            const clearTest=()=>
            {
                  let newText='';
                  setText(newText);
            }

            const handleCopy=()=>
                  { 
                       var text=document.getElementById("myBox");
                       text.select();
                       navigator.clipboard.writeText(text.value);
                  }


            const [text, setText] = useState('Enter text here');
      return (
            <>
    <div className='container'>
            <h3>{prop.heading} </h3>
            <div className="mb-3">         
            {/* <label for="myBox" class="form-label">Email text Area</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:prop.mode==='dark'?'grey':'white'}} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={clearTest}>Clear text</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy text</button>
    </div>

      <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} charachters</p>
      </div>
    </>
  )
}
