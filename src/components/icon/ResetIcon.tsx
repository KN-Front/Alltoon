
import React from 'react';

interface ResetIconProps {
  width?: number;
  height?: number;
}

const ResetIcon: React.FC<ResetIconProps> = ({ width = 21, height = 20 }) => {
  return (
    <div className='resetIcon'>
      <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="0.5" y="0.5" width="19" height="12" rx="1.5" stroke="#999"></rect>
        <path d="M8.934 6.008c0-.736-.928-1.144-2.328-1.144-1.392 0-2.312.408-2.312 1.144s.92 1.144 2.312 1.144c1.4 0 2.328-.408 2.328-1.144ZM5.822 9.824V8.208h1.512v1.616h.936V8.208h1.544v-.744h-6.44v.744h1.512v1.616h.936Zm3.672-5.208V3.88H3.702v.736h5.792Zm-1.544 1.4c0 .288-.576.448-1.344.448-.768 0-1.328-.16-1.328-.448 0-.304.56-.456 1.328-.456s1.344.152 1.344.456ZM5.31 3.552h2.576v-.728H5.31v.728Zm11.03 6.28V2.704h-.889v2.8h-.576V2.832h-.872v6.672h.872V6.256h.576v3.576h.888Zm-2.56-2.328c-.849-.496-1.305-1.512-1.305-2.904v-.296h1.112V3.56h-3.216v.744h1.2v.312c0 1.408-.464 2.432-1.472 3.104l.568.624c.568-.328 1.184-1.16 1.344-1.816.184.632.784 1.368 1.248 1.656l.52-.68Z" fill="#999"></path>
      </svg>
    </div>
    
  );
};

export default ResetIcon;