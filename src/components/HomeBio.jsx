import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';
import profile from '../images/kingslee.jpg';
import profileVideo from '../images/videos/profile-video.mp4';

const HomeBoi = ({ userTheme }) => {
  return (
    <div className="relative w-full min-h-screen flex justify-center align-middle flex-col dark:bg-dim overflow-hidden">
      {/* Video Section with padding and corner radius */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-3xl overflow-hidden ">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          >
            <source src={profileVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Theme-aware overlay */}
          <div
            className={`absolute w-full h-full inset-0 ${
              userTheme === 'dark'
                ? 'bg-gradient-to-b from-dim/60 via-dim/90 to-dim/100'
                : 'bg-gradient-to-b from-white/60 via-white/90 to-white/100'
            }`}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[650px] mx-auto text-center px-6">
        <a
          href={profile}
          download="kingslee-profile.jpg"
          className="cursor-pointer inline-block"
        >
          <img
            className="item w-[120px] md:w-[180px] mx-auto rounded-full mb-4 md:mb-8 hover:opacity-80 transition-opacity"
            src={profile}
            alt="Nworie Kingslee"
          />
        </a>

        <p className="item text-3xl md:text-4xl text-dark font-semibold dark:text-imagination">
          Hey there, I'm <span className="fancy-text">Kingslee</span>
        </p>

        

        {userTheme === 'dark' ? (
          <p className="item mt-4 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
            <span className="highlight">AI/ML Engineer</span> passionate about building intelligent products that bridge cutting-edge 
            technology and real-world impact. As an <span className="highlight">open-source advocate</span> and <span className="highlight">community builder</span>, 
            I also lead initiatives that <span className="highlight">make AI and technology more accessible</span> across southeastern Nigeria.
          </p>
        ) : (
           <p className="item mt-4 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
            <span className="darker font-medium">AI/ML Engineer</span> passionate about building intelligent products that bridge cutting-edge 
            technology and real-world impact. As an <span className="darker font-medium">open-source advocate</span> and <span className="darker font-medium">community builder</span>, 
            I also lead initiatives that <span className="darker font-medium">make AI and technology more accessible</span> across southeastern Nigeria.
          </p>
        )}
        <div className="item mx-auto">
          <Button
            userTheme={userTheme === 'dark' ? 'light' : 'dark'}
            cta="See my adventures"
          />
        </div>
      </div>

      {/* Footer within the container */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <Footer userTheme={userTheme} />
      </div>
    </div>
  );
};

export default HomeBoi;
