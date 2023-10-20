import React from 'react';
import { ReactComponent as Adimg } from '../../img/umcbanner.svg';

export default function Ad(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="Ad" style={{ weight: '100%' }}>
      <Adimg className="Ad-img" />
    </div>
  );
}
