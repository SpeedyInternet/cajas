export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-sm font-semibold text-lg text-white uppercase tracking-widest border-b-gray-300 border-e-gray-300 border-t-gray-300 ${
                    disabled?'bg-white  ':' hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 '
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
