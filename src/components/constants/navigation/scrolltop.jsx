import * as React from 'react';
import { useState, useEffect } from 'react';

export default function ScrollTop () {

    const [showTopBtn, setShowTopBtn] = useState (false);

    useEffect (() => {
        window.addEventListener ("scroll", () => {
            if (window.scrollY > 400 ) {
                setShowTopBtn (true);
            } else {
                setShowTopBtn (false);
            }
        });
    }, [] );

    const goToTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='top-to-btm'>
            {" "}
            {
                showTopBtn && (
                    <button className='icon-position' style={{right:0}} onClick={goToTop}>
                        <svg className='h-6 w-6 icon-style' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M5.23 15.79a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 11.832 6.29 15.77a.75.75 0 01-1.06.02zm0-6a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 5.832 6.29 9.77a.75.75 0 01-1.06.02z"></path>
                        </svg>
                    </button>
                )
            }
            {" "}

        </div>
    )

}