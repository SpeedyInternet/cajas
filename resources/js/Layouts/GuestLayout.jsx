import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { images } from "../../assets/index";

export default function Guest({ children }) {
    return (
        <div 
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
            style={{ 
                background: `no-repeat scroll center / cover url(${images.fondoSVG})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className="w-11/12 max-w-md  px-6 py-2 rounded-3xl bg-white/20 shadow-lg  ring-black/5 ">
                <div>
                    <ApplicationLogo className="w-96 h-full fill-current text-gray-500" />
                </div>
                {children}
            </div>
        </div>
    );
}
