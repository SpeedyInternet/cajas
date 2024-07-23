// import { useEffect, useState } from "react";
// import TextInput from '@/Components/TextInput';
// import InputLabel from '../InputLabel';
// import InputError from '../InputError';
// import validarDocumento from '@/Providers/InputValidators'; // Ajusta esta ruta según sea necesario
// import Dropdown_B from "../Dropdown/Dropdown_B";

// const formatDate = (date) => {
//     const d = new Date(date);
//     const month = '' + (d.getMonth() + 1);
//     const day = '' + d.getDate();
//     const year = d.getFullYear();

//     return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
// };

// export default function CardInfoUser({ datosCliente, identificacion, onIdentificacionChange }) {
//     const [identificacionCliente, setIdentificacionCliente] = useState('');
//     const [cliente, setCliente] = useState('');
//     const [error, setError] = useState('');
//     const [tipoDePago, setTipoDePago] = useState('Tipo de Pago');
//     const [fechaTransaccion, setFechaTransaccion] = useState(formatDate(Date.now()));

//     const validateInput = (value) => /^\d{0,13}$/.test(value);

//     const handleSelect = (value) => {
//         setTipoDePago(value);
//         console.log("Tipo de pago seleccionado seleccionada:", value);
//     };

//     const handleChange = (e) => {
//         const value = e.target.value;
//         // Filtrar caracteres no numéricos
//         const onlyNumbers = value.replace(/\D/g, '');
//         setIdentificacionCliente(onlyNumbers);
//     };

//     useEffect(() => {
//         setError(validarDocumento(identificacionCliente));
//     }, [identificacionCliente]);

//     useEffect(() => {
//         onIdentificacionChange(identificacionCliente);
//     }, [identificacionCliente, onIdentificacionChange]);

//     return (
//         <>
//             <article className="relative rounded-xl p-4 bg-neutral-white/70 sm:p-6 lg:p-3 font-averta h-full shadow-xl ">
//                 <strong
//                     className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-es-2xl rounded-ee-2xl px-1.5 py-1 
//                     text-[15px] text-center  text-blue-800 font-bold"
//                 >
//                     Cliente
//                 </strong>
//                 <strong className="px-3 py-1.5 text-[20px] font-medium text-white" />
//                 <div className="grid grid-cols-8 gap-4">
//                     <div className='w-full col-span-4'>
//                         <h3 className="text-lg font-medium sm:text-4xl font-averta">
//                             <div>
//                                 <InputLabel htmlFor="identificacion" value="Cédula o RUC" className="text-gray-700 font-averta" />
//                                 <TextInput
//                                     id="identificacion"
//                                     type="text"
//                                     name="identificacion"
//                                     value={identificacionCliente}
//                                     className="mt-1 block w-full font-averta"
//                                     autoComplete="identificacion"
//                                     isFocused={true}
//                                     onChange={handleChange}
//                                     // onBlur={handleBlur}
//                                     validate={validateInput}
//                                 />
//                                 {(!error.success && identificacionCliente !== '') && <InputError message={error.msg} className="mt-2" />}
//                             </div>
//                         </h3>
//                     </div>
//                     <div className='w-full col-span-4'>
//                         <h3 className="text-lg font-medium sm:text-4xl font-averta">
//                             <div>
//                                 <InputLabel htmlFor="cliente" value="Nombres" className="text-gray-700 font-averta" />
//                                 <TextInput
//                                     id="cliente"
//                                     type="text"
//                                     name="cliente"
//                                     value={cliente}
//                                     className="mt-1 block w-full font-averta bg-primary-second/50"
//                                     autoComplete="cliente"
//                                     isFocused={true}
//                                     isDisabled={true}
//                                 />
//                                 {/* {error && <InputError message={error} className="mt-2" />} */}
//                             </div>
//                         </h3>
//                     </div>
//                     <div className='w-full col-span-2'>
//                         <h3 className="text-lg font-medium sm:text-4xl font-averta">
//                             <div>
//                                 <InputLabel htmlFor="fechaTransaccion" value="Fecha Transacción" className="text-gray-700 font-averta" />
//                                 <TextInput
//                                     id="fechaTransaccion"
//                                     type="date"
//                                     name="fechaTransaccion"
//                                     value={fechaTransaccion}
//                                     className="mt-1 block w-full font-averta bg-primary-second/50"
//                                     autoComplete="identificacion"
//                                     isFocused={true}
//                                     isDisabled={true}
//                                 />
//                                 {/* {error && <InputError message={error} className="mt-2" />} */}
//                             </div>
//                         </h3>
//                     </div>
//                     <div className='w-full col-span-2'>
//                         <h3 className="text-lg font-medium sm:text-4xl font-averta">
//                             <div>
//                                 <InputLabel htmlFor="tipoCobro" value="Tipo de Documento" className="text-gray-700 font-averta" />
//                                 <TextInput
//                                     id="tipoCobro"
//                                     type="text"
//                                     name="tipoCobro"
//                                     value={'COBRO'} // Tipo de cobro
//                                     className="mt-1 block w-full font-averta bg-primary-second/50"
//                                     autoComplete="identificacion"
//                                     isFocused={true}
//                                     isDisabled={true}
//                                 />
//                             </div>
//                         </h3>
//                     </div>
//                     <div className="w-full col-span-2">
//                         <h3 className="text-lg font-medium sm:text-4xl font-averta">
//                             <InputLabel htmlFor="tipoPago" value="Tipo de Pago" className="text-gray-700 font-averta" />
//                             <Dropdown_B>
//                                 <Dropdown_B.Trigger>
//                                     <span className="inline-flex rounded-md ring-1 ring-gray-300 w-full">
//                                         <button
//                                             type="button"
//                                             className="inline-flex justify-between items-center px-3 w-full py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
//                                         >
//                                             {tipoDePago || 'Cuenta Banco / Caja'}
//                                             <svg
//                                                 className="ms-2 -me-0.5 h-4 w-4"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 viewBox="0 0 20 20"
//                                                 fill="currentColor"
//                                             >
//                                                 <path
//                                                     fillRule="evenodd"
//                                                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                     clipRule="evenodd"
//                                                 />
//                                             </svg>
//                                         </button>
//                                     </span>
//                                 </Dropdown_B.Trigger>

//                                 <Dropdown_B.Content>
//                                     <Dropdown_B.Link onClick={() => handleSelect('Efectivo')}>Efectivo</Dropdown_B.Link>
//                                     <Dropdown_B.Link onClick={() => handleSelect('Tarjeta de Crédito')}>Tarjeta de Crédito</Dropdown_B.Link>
//                                 </Dropdown_B.Content>
//                             </Dropdown_B>
//                         </h3>
//                     </div>
//                 </div>
//             </article>
//         </>
//     );
// }


import { useEffect, useState } from "react";
import TextInput from '@/Components/TextInput';
import InputLabel from '../InputLabel';
import InputError from '../InputError';
import validarDocumento from '@/Providers/InputValidators'; // Ajusta esta ruta según sea necesario
import Dropdown_B from "../Dropdown/Dropdown_B";

const formatDate = (date) => {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();

    return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
};

export default function CardInfoUser({ onIdentificacionChange }) {
    const [identificacionCliente, setIdentificacionCliente] = useState('');
    const [cliente, setCliente] = useState('');
    const [error, setError] = useState('');
    const [tipoDePago, setTipoDePago] = useState('Tipo de Pago');
    const [fechaTransaccion, setFechaTransaccion] = useState(formatDate(Date.now()));

    const validateInput = (value) => /^\d{0,13}$/.test(value);

    const handleSelect = (value) => {
        setTipoDePago(value);
        console.log("Tipo de pago seleccionado seleccionada:", value);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        // Filtrar caracteres no numéricos
        const onlyNumbers = value.replace(/\D/g, '');
        setIdentificacionCliente(onlyNumbers);
    };

    const simulateUserSearch = (identificacion) => {
        // Simulación de búsqueda de usuario
        console.log('Simulando búsqueda de usuario con identificación:', identificacion);
        if (identificacion === '1313401117' && error.success) {
            setCliente('Jorge Ibarra');
            onIdentificacionChange({success: true, identificacion}); // Enviar true al componente padre
        } else {
            setCliente('');
            onIdentificacionChange({success: false, identificacion}); // Enviar false al componente padre
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            simulateUserSearch(identificacionCliente);
        }
    };

    // const handleBlur = () => {
    //     simulateUserSearch(identificacionCliente);
    // };

    useEffect(() => {
        setError(validarDocumento(identificacionCliente));
    }, [identificacionCliente]);

    useEffect(() => {
        // if(error.success){
        //     onIdentificacionChange({success:true, identificacionCliente});
        // }else{
        //     onIdentificacionChange({success:false, identificacionCliente});
        // }
    }, [identificacionCliente, onIdentificacionChange]);

    return (
        <>
            <article className="relative rounded-xl p-4 bg-neutral-white/70 sm:p-6 lg:p-3 font-averta h-full shadow-xl ">
                <strong
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-es-2xl rounded-ee-2xl px-1.5 py-1 
                    text-[15px] text-center  text-blue-800 font-bold"
                >
                    Cliente
                </strong>
                <strong className="px-3 py-1.5 text-[20px] font-medium text-white" />
                <div className="grid grid-cols-8 gap-4">
                    <div className='w-full col-span-4'>
                        <h3 className="text-lg font-medium sm:text-4xl font-averta">
                            <div>
                                <InputLabel htmlFor="identificacion" value="Cédula o RUC" className="text-gray-700 font-averta" />
                                <TextInput
                                    id="identificacion"
                                    type="text"
                                    name="identificacion"
                                    value={identificacionCliente}
                                    className="mt-1 block w-full font-averta"
                                    autoComplete="identificacion"
                                    isFocused={true}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    // onBlur={handleBlur}
                                    validate={validateInput}
                                />
                                {(!error.success && identificacionCliente !== '') && <InputError message={error.msg} className="mt-2" />}
                            </div>
                        </h3>
                    </div>
                    <div className='w-full col-span-4'>
                        <h3 className="text-lg font-medium sm:text-4xl font-averta">
                            <div>
                                <InputLabel htmlFor="cliente" value="Nombres" className="text-gray-700 font-averta" />
                                <TextInput
                                    id="cliente"
                                    type="text"
                                    name="cliente"
                                    value={cliente}
                                    className="mt-1 block w-full font-averta bg-primary-second/50"
                                    autoComplete="cliente"
                                    isFocused={true}
                                    isDisabled={true}
                                />
                                {/* {error && <InputError message={error} className="mt-2" />} */}
                            </div>
                        </h3>
                    </div>
                    <div className='w-full col-span-2'>
                        <h3 className="text-lg font-medium sm:text-4xl font-averta">
                            <div>
                                <InputLabel htmlFor="fechaTransaccion" value="Fecha Transacción" className="text-gray-700 font-averta" />
                                <TextInput
                                    id="fechaTransaccion"
                                    type="date"
                                    name="fechaTransaccion"
                                    value={fechaTransaccion}
                                    className="mt-1 block w-full font-averta bg-primary-second/50"
                                    autoComplete="identificacion"
                                    isFocused={true}
                                    isDisabled={true}
                                />
                                {/* {error && <InputError message={error} className="mt-2" />} */}
                            </div>
                        </h3>
                    </div>
                    <div className='w-full col-span-2'>
                        <h3 className="text-lg font-medium sm:text-4xl font-averta">
                            <div>
                                <InputLabel htmlFor="tipoCobro" value="Tipo de Documento" className="text-gray-700 font-averta" />
                                <TextInput
                                    id="tipoCobro"
                                    type="text"
                                    name="tipoCobro"
                                    value={'COBRO'} // Tipo de cobro
                                    className="mt-1 block w-full font-averta bg-primary-second/50"
                                    autoComplete="identificacion"
                                    isFocused={true}
                                    isDisabled={true}
                                />
                            </div>
                        </h3>
                    </div>
                    <div className="w-full col-span-2">
                        <h3 className="text-lg font-medium sm:text-4xl font-averta">
                            <InputLabel htmlFor="tipoPago" value="Tipo de Pago" className="text-gray-700 font-averta" />
                            <Dropdown_B>
                                <Dropdown_B.Trigger>
                                    <span className="inline-flex rounded-md ring-1 ring-gray-300 w-full">
                                        <button
                                            type="button"
                                            className="inline-flex justify-between items-center px-3 w-full py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {tipoDePago || 'Cuenta Banco / Caja'}
                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a 1 0 01-1.414 0l-4-4a 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown_B.Trigger>

                                <Dropdown_B.Content>
                                    <Dropdown_B.Link onClick={() => handleSelect('Efectivo')}>Efectivo</Dropdown_B.Link>
                                    <Dropdown_B.Link onClick={() => handleSelect('Tarjeta de Crédito')}>Tarjeta de Crédito</Dropdown_B.Link>
                                </Dropdown_B.Content>
                            </Dropdown_B>
                        </h3>
                    </div>
                </div>
            </article>
        </>
    );
}
