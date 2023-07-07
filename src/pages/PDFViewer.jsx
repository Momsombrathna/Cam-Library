import React from 'react';
import { useLocation } from 'react-router-dom';

const PDFViewer = () => {
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const link = decodeURIComponent(urlParams.get('link'));
    const title = decodeURIComponent(urlParams.get('title'));
    const description = decodeURIComponent(urlParams.get('description'));

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {/*<div className='flex flex-col items-center justify-center'>*/}
            {/*    <div className='flex justify-center items-center'>*/}
            {/*        <h2>{title}</h2>*/}
            {/*        <iframe*/}
            {/*            src={link}*/}
            {/*            width='500'*/}
            {/*            height='375'*/}
            {/*            frameBorder='0'*/}
            {/*            scrolling='auto'*/}
            {/*        ></iframe>*/}
            {/*        <p>{description}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                    <div className="desc p-4 text-gray-800">
                        <iframe
                            src={link}
                            width='1000'
                            height='675'
                            frameBorder='0'
                            scrolling='auto'
                        ></iframe>
                        <a className="title font-bold block cursor-pointer hover:underline">{title}</a>
                        <span className="description text-sm block py-2 border-gray-400 mb-2">{description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFViewer;
