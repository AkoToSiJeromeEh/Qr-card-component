import '../Style/Style.css'
import  { useState } from 'react';
function QrComp() {
  const [toggle , setToggle] = useState(false);
  function handleToggle() {

     setToggle(preval => !preval)
  }
  return (
    <div className="qr--container">
        <div className="qr-img--container">
            <img className='qr--code' src="image-qr-code.png" alt="" />
           <div className={toggle ? 'logo--cont show' : 'logo--cont'}>
          <button onClick={handleToggle}>
            
              {
                toggle ? 
                <i className="fa-solid fa-eye fa-xl"></i>
                : 
                <i className='fa-solid fa-eye-slash fa-xl'></i>
              }
      
          </button>
           </div>
        </div>
        <div className="qr--content--container">
              <h1>
              Improve your front-end skills by building projects
              </h1>
              <p>
              Scan the QR code to visit <span> <a href="https://www.frontendmentor.io/home">Frontend Mentor</a> </span> and take your coding skills to the next level!
              </p>
        </div>
    </div>
  )
}

export default QrComp
