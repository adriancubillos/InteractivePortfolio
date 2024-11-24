'use client';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, toggle }) => {
  /*
    createPortal function renders a component outside its parent DOM hierarchy
    By using createPortal, the modal can be rendered at the root level of the DOM (or any other specified location), which is useful for modals, tooltips, or any UI element that needs to "break out" of its parent container's layout or stacking context.
    This approach is particularly useful for modals because it allows the modal to be rendered on top of other content, regardless of where the Modal component is placed in the React component tree.
  */
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center pointer-events-auto">
      <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">
        <p className="font-light">Do you like to play the background music?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2">
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded">
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('my-modal'),
  );
};
const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstUserInteraction = () => {
    const musicConsent = sessionStorage.getItem('musicConsent');
    if (musicConsent === 'true ' && isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    ['click', 'keydown', 'touchstart'].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction),
    );
  };

  useEffect(() => {
    const consent = sessionStorage.getItem('musicConsent');
    if (consent) {
      setIsPlaying(consent === 'true');

      if (consent === 'true') {
        ['click', 'keydown', 'touchstart'].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction),
        );
      }
    } else {
      setShowModal(true);
    }
  }, []);

  const toggleSound = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    newState ? audioRef.current.play() : audioRef.current.pause();
    sessionStorage.setItem('musicConsent', String(newState));
    setShowModal(false);
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && <Modal onClose={() => setShowModal(false)} toggle={toggleSound} />}

      <audio ref={audioRef} loop>
        <source src={'/audio/birds39-forest-20772.mp3'} type="audio/mpeg" />
        Your Browser does not support the audio element.
      </audio>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleSound}
        className="text-foreground rounded-full flex items-center justify-center custom-bg fixed right-[3%] top-10 w-fit self-start z-50"
        aria-label={'sound'}
        name={'sound'}>
        {isPlaying ? (
          <span className="relative w-14 h-14 p-4 hover:text-accent">
            <Volume2 className="w-full h-auto" strokeWidth={1.5} />
            <span className="peer absolute top-0 left-0 w-full h-full" />
            <span
              className="absolute hidden peer-hover:block px-2 py-1  mx-2 top-1/2 -translate-y-1/2 
          bg-background text-foreground text-sm rounded-md shadow-lg right-full left-auto">
              music on
            </span>
          </span>
        ) : (
          <span className="relative w-14 h-14 p-4 hover:text-accent">
            <VolumeX className="w-full h-auto" strokeWidth={1.5} />
            <span className="peer absolute top-0 left-0 w-full h-full" />
            <span
              className="absolute hidden peer-hover:block px-2 py-1  mx-2 top-1/2 -translate-y-1/2 
          bg-background text-foreground text-sm rounded-md shadow-lg right-full left-auto">
              music off
            </span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
