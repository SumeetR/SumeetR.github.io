import React from 'react';
import './App.css';
import NavBar from './NavBar';
import ImageGrid from './ImageGrid';

function App() {
  const image = {
    id: '1',
    image_url: 'https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/01_ValleDelCocora_Colombia_Latinoamerica.jpeg',
    tags: [
      'Valle Del Cocora',
      'Colombia',
      'Latinoamerica'
    ]
  };  
  return (
    <div>
      <NavBar />
      <ImageGrid />
    </div>
  );
}

export default App;
