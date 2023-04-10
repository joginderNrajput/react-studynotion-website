import React from "react";

const Home = ({ isLoggedIn }) => {
  return (
    <div className=" bg-richblack-900">
      <section className="w-[100vw] h-[100vh] bg-richblack-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
          
          <h1 className="flex m-auto flex-col  mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Study Notion we focus on markets where technology,
            innovation, and capital can unlock long-term value and drive
            economic growth.
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Home Page
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
