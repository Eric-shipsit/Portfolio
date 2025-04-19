import React from 'react';

export default function ListItem({ text }) {
  return <div style={{marginTop: '20px'}}><span>&gt; {text} <br></br></span></div>;
}