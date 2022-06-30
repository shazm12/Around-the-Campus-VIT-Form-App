import React from 'react'

const ThankYou = () => {
  return (
    <div style={{
        height: 'max-content',
        width:'100%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <div style={{
            width:' 100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

        }}>
            <h1 style={{
                fontFamily: 'Source Code Pro,monospace',
                fontSize: '9rem',
                lineHeight: '8rem',
                textAlign: 'center'
            }}>Thank You</h1>
            <h3 style={{
                fontSize: '20px',
                alignSelf: 'center',
                textAlign: 'center',
            }}>
                Glad you could help us out in 
                collecting some amazing places 
                around our campus...</h3>
        </div>

        
    </div>
  )
}

export default ThankYou;