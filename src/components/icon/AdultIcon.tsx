import React from 'react';

interface AdultIconProps {
  width?: number;
  height?: number;
}

const AdultIcon: React.FC<AdultIconProps> = ({ width = 21, height = 20 }) => {
  return (
    <div className='adultIcon'>
      <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.953 2.097c0 2.199-.161 7.11.228 9.054C3.402 17.265 10 19.711 10 19.711s6.598-2.446 7.819-8.56c.389-1.945.227-6.855.227-9.054C18.046 2.097 14.237 1 10 1 5.763 1 1.953 2.097 1.953 2.097Z" fill="#F4831F"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.402a2.34 2.34 0 0 0-2.34 2.339c0 1.29 1.05 2.339 2.34 2.339a2.34 2.34 0 0 0 0-4.678Zm2.695 5.382c-.036-.02-.07-.04-.11-.059a1.522 1.522 0 0 0-.14-.057 3.783 3.783 0 0 0-.49-.163c-.574.4-1.257.615-1.956.617-.722 0-1.393-.23-1.956-.617-.212.054-.42.126-.62.215-.052.024-.096.05-.14.075a2.552 2.552 0 0 0-1.323 2.257 7.015 7.015 0 0 0 8.08 0 2.55 2.55 0 0 0-1.345-2.268Z" fill="#fff"></path>
      </svg>
    </div>
     
  );
};

export default AdultIcon;