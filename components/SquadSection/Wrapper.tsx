import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="mx-8 mb-10 max-w-[680px] rounded-lg bg-white px-8 py-10 md:mx-20 md:px-10 lg:mx-14 lg:my-16 lg:mr-10 lg:mt-20 xl:my-20 xl:px-14">
      {children}
    </div>
  );
};

export default Wrapper;
