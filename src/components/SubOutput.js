import React from 'react';

export default function ListItem({ title, info }) {
  return <div style={{marginTop: '5px', marginLeft: '70px'}}><span>{title}: {info} <br></br></span></div>;
}