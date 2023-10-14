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


  return (
    <div className='cursor-pointer'>
      {
        mounted && (
          <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <PiWebhooksLogo size={25}/>
          </div>
        )
      }

    </div>
  );
}

export default Theme;