import React, { useState } from 'react';

export function DisplayImage(props) {
  const { images, tryCount } = props;
  const displayImage = images[tryCount];
  return (
    <div>
      <img src={displayImage} className="App-logo" alt="logo"/>
    </div>
  );
}