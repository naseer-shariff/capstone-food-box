import React from 'react';

export default function Header(props) {
  return (
    <header>
      <div style={{float:"right"}}>
      <a href="/">Order Food</a> | <a href="/admin">Admin</a> &nbsp;&nbsp;&nbsp;
      </div>
      <p>&nbsp;</p>
     <h1 className="text-center" style={{color:"blue"}}><img src="/images/logo.png"/>&nbsp;&nbsp;Food Box - Delicious Food Just A Click Away!</h1>
     <p>&nbsp;</p>
    </header>
  );
}