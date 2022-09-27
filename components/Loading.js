import React from 'react';
import { Circle } from 'better-react-spinkit';

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src='https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg'
          alt=''
          height={200}
          style={{ marginBottom: 10 }}
        />

        <Circle color='#3CBC28' size={60} />
      </div>
    </center>
  );
}

export default Loading;
