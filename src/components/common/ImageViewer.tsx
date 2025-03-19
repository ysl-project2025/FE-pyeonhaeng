import React from 'react';

const ImageViewer: React.FC<{ src: string; alt?: string }> = ({
  src,
  alt = '사진을 불러올수 없습니다',
}) => {
  return <img src={src} alt={alt} width={300} height={200} />;
};

export default ImageViewer;
