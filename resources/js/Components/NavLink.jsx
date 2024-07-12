import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-white text-white text-xl hover:text-white hover:border-white focus:text-gray-700 focus:border-indigo-700'
                    : 'border-transparent text-white text-xl hover:text-white hover:border-white focus:text-gray-700 focus:border-indigo-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
