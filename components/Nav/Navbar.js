import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MenuItems } from './MenuItems'


const Navbar = ({textColor}) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const router = useRouter()

    const STYLES = ['megaLight', 'megaDark']

    const checkColor = STYLES.includes(textColor) ? textColor : STYLES[0]

  return <div>
      <nav className={` container navbarItems `}>
      <div className={` logo `}>
              <span className={` ${checkColor} mega`}>Mega</span>
              <span className={` law `}>Law</span>
              <span className={` d-block partners ${checkColor}`}>Partners</span>
            </div>
            <div className={`px-1 px-sm-0 menuIcon `} onClick={handleClick}>
                {
                    clicked ? <img src='./img/togglerClose.svg' className='img-fluid'/> : <img src="./img/togglerOpen.svg" className='' />
                }
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={`poppins-medium ${checkColor} ${item.cName}`} target={item.target}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <button className={`btn text-white nav-btn`}>Contact Us</button>
        </nav>
  </div>;
};

export default Navbar;
