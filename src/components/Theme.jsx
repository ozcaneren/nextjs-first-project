'use client'

import {PiWebhooksLogo} from "react-icons/pi";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='cursor-pointer'>
      {
        mounted && (
          theme === 'dark' ? (
            <PiWebhooksLogo className="rotate-45" size={25} onClick={toggleTheme} />
          ) : (
            <PiWebhooksLogo className="" size={25} onClick={toggleTheme} />
          )    
        )
      }
    </div>
  );
}

export default Theme;