import React from 'react';

const Tag = (props: { tag: string, onClick: (tag: string) => void }) => {
  const { tag, onClick } = props;
  return <button onClick={() => onClick(tag)}> #{tag} </button>;
};

export default Tag; 