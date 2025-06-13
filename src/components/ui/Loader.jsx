import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = ({height, width}) => {
  return (
    <DotLottieReact
      src="https://lottie.host/aacc53ad-5357-4db8-8f2a-311b53cb4c2b/ONXgZVqi8b.lottie"
      loop
      autoplay
      style={{ height: height, width:  width}}
    />
  );
};
export default Loader