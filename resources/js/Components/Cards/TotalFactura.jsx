import { useEffect, useState } from "react";

export default function TotalFactura({ total }) {
    const [totalFactura, setTotalFactura] = useState(total);
    return (
        <>
            <article className="relative rounded-xl p-4 bg-neutral-white/70 sm:p-6 lg:p-3 font-averta h-full shadow-xl flex flex-col items-center justify-center select-none ">
                <strong
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-es-2xl rounded-ee-2xl px-1.5 py-1 
                    text-[15px] text-center text-blue-800 font-bold "
                >
                    Total factura
                </strong>
                <strong className="px-3 py-1.5 text-[20px] font-medium text-white " />
                <div className="flex items-center justify-center h-full w-full text-5xl font-bold text-blue-900 ">
                    {Number(totalFactura).toFixed(2)} $
                </div>
            </article>
        </>
    );
}
