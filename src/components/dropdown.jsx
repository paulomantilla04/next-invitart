'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DropdownMenu = ({ userImage, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div onClick={toggleMenu} className="cursor-pointer">
        <Image
          src={userImage}
          alt="User"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-1 z-10">
          {options.map((option, index) => (
            option.onClick ? (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  option.onClick();
                  setIsOpen(false);
                }}
              >
                {option.name}
              </button>
            ) : (
              <Link
                key={index}
                href={option.url}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {option.name}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
