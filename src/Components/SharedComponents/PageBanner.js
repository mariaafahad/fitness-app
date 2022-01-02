import React from 'react';
const pageBg= 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

const PageBanner = ({title}) => {
    return (
        <>
        <div
          style={{ backgroundImage: `url(${pageBg})` }}
          className="py-20 md:py-32 bg-blend-overlay bg-no-repeat bg-cover bg-center"
        >
          <div className="container text-white text-center px-3 mx-auto flex flex-col items-center">
              <h1 className="my-4 uppercase text-2xl md:text-6xl font-bold leading-tight">
                {title}
              </h1>
          </div>
        </div>
      </>
    );
};

export default PageBanner;