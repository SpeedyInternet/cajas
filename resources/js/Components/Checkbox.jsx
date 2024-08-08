export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-blue-800 shadow-sm focus:ring-0 focus:ring-offset-0 cursor-pointer ' +
                className
            }
        />
    );
}