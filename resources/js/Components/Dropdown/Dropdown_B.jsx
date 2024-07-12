// import { useState, createContext, useContext, Fragment } from 'react';
// import { Transition } from '@headlessui/react';

// const DropDownContext = createContext();

// const Dropdown_B = ({ children }) => {
//     const [open, setOpen] = useState(false);

//     const toggleOpen = () => {
//         setOpen((prev) => !prev);
//     };

//     const close = () => {
//         setOpen(false);
//     };

//     return (
//         <DropDownContext.Provider value={{ open, toggleOpen, close }}>
//             <div className="relative">
//                 {typeof children === 'function' ? children({ open, toggleOpen, close }) : children}
//             </div>
//         </DropDownContext.Provider>
//     );
// };

// const Trigger = ({ children }) => {
//     const { toggleOpen } = useContext(DropDownContext);

//     return (
//         <div onClick={toggleOpen}>
//             {children}
//         </div>
//     );
// };

// const Content = ({ children, align = 'start', width = '48', contentClasses = 'py-1 bg-white' }) => {
//     const { open, close } = useContext(DropDownContext);

//     let alignmentClasses = 'origin-top';

//     if (align === 'left') {
//         alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
//     } else if (align === 'right') {
//         alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
//     }

//     let widthClasses = '';
    
//     if (width) {
//         widthClasses = 'w-'+width;
//     }

//     return (
//         <>
//             <Transition
//                 as={Fragment}
//                 show={open}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//             >
//                 <div
//                     className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
//                 >
//                     <div className={`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>
//                         {typeof children === 'function' ? children({ close }) : children}
//                     </div>
//                 </div>
//             </Transition>
//         </>
//     );
// };

// const DropdownLink = ({ className = '', onClick, children }) => {
//     const { close } = useContext(DropDownContext);

//     const handleClick = (e) => {
//         if (onClick) onClick(e);
//         close();
//     };

//     return (
//         <a
//             onClick={handleClick}
//             className={
//                 'block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out select-none cursor-pointer' +
//                 className
//             }
//         >
//             {children}
//         </a>
//     );
// };

// Dropdown_B.Trigger  = Trigger;
// Dropdown_B.Content  = Content;
// Dropdown_B.Link     = DropdownLink;

// export default Dropdown_B;

import { useState, createContext, useContext, Fragment } from 'react';
import { Transition } from '@headlessui/react';

const DropDownContext = createContext();

const Dropdown_B = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    const close = () => {
        setOpen(false);
    };

    return (
        <DropDownContext.Provider value={{ open, toggleOpen, close }}>
            <div className="relative">
                {typeof children === 'function' ? children({ open, toggleOpen, close }) : children}
            </div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { toggleOpen } = useContext(DropDownContext);

    return (
        <div onClick={toggleOpen} className="w-full">
            {children}
        </div>
    );
};

const Content = ({ children, align = 'start', width = '48', contentClasses = 'py-1 bg-white' }) => {
    const { open, close } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
    } else if (align === 'right') {
        alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
    }

    let widthClasses = '';
    
    if (width) {
        widthClasses = `w-${width}`;
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                >
                    <div className={`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>
                        {typeof children === 'function' ? children({ close }) : children}
                    </div>
                </div>
            </Transition>
        </>
    );
};

const DropdownLink = ({ className = '', onClick, children }) => {
    const { close } = useContext(DropDownContext);

    const handleClick = (e) => {
        if (onClick) onClick(e);
        close();
    };

    return (
        <a
            onClick={handleClick}
            className={
                'block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out select-none cursor-pointer ' +
                className
            }
        >
            {children}
        </a>
    );
};

Dropdown_B.Trigger  = Trigger;
Dropdown_B.Content  = Content;
Dropdown_B.Link     = DropdownLink;

export default Dropdown_B;
