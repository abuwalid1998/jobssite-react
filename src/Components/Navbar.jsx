import PropTypes from 'prop-types'; // Import PropTypes
import logo from '../assets/logo.png';
import avatar from '../assets/avater.png';
import {useEffect, useState} from 'react';

function Navbar({ logged = false }) {
    const [selected, setSelected] = useState(1);

    useEffect(() => {
        const path = window.location.pathname;
        const pageIndex = ['/', '/jobs', '/add-job'].indexOf(path);
        setSelected(pageIndex >= 0 ? pageIndex + 1 : 1); // Default to 'Home' if path is not recognized
    }, []);

    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <a className="flex flex-shrink-0 items-center mr-4" href="/home">
                            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
                        </a>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2 items-center">
                                {['Home', 'Jobs', 'Add Job'].map((text, index) => (
                                    <a
                                        key={index}
                                        onClick={() => setSelected(index + 1)}
                                        href={`/${text.toLowerCase().replace(' ', '-')}`}
                                        className={`${
                                            selected === index + 1 ? 'bg-black' : ''
                                        } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                                    >
                                        {text}
                                    </a>
                                ))}
                                {logged && (
                                    <div className="relative">
                                        <img
                                            className="h-10 w-10 rounded-full object-cover border-2 border-white cursor-pointer"
                                            src={avatar}
                                            alt="Profile"
                                            onClick={() => console.log('Avatar clicked')}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    logged: PropTypes.bool,
};

export default Navbar;
