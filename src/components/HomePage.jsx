import React from 'react';

const HomePage = () => {
  return (
    <div>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex' }}>

      {/* Mathmatics Button */}
      <button style={{ fontSize: '32px', backgroundColor: 'rgb(72, 174, 248)', color: 'black', width: '210px' , height: '100px' , marginRight: '30px' }}>Mathematics</button>

      {/* Computer Science Button */}
      <button style={{ fontSize: '29px', backgroundColor: 'rgb(209, 203, 181)', color: 'black', width: '210px' , height: '100px' , marginRight: '30px' }}>Computer Science</button>

      {/* History Button */}
      <button style={{ fontSize: '40px', backgroundColor: 'rgb(220, 252, 130)', color: 'black', width: '210px' , height: '100px' , marginRight: '30px' }}>History</button>
      
      </div>
      </div>


      <br/><br/><br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex' }}>

      {/* Criminal Justice Button */}
      <button style={{ fontSize: '30px', backgroundColor: 'rgb(218, 75, 221)', color: 'black', width: '210px' , height: '100px' , marginRight: '30px' }}>Criminal Justice</button>

      {/* Medical Button */}
      <button style={{ fontSize: '40px', backgroundColor: 'rgb(253, 46, 46)', color: 'black', width: '210px' , height: '100px' , marginRight: '30px' }}>Medical</button>

      </div>
      </div>


      <br></br>
      <button>Submit</button>

    </div>
  )
}

export default HomePage