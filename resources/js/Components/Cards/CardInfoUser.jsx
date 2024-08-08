import { useEffect, useState } from "react";
import TextInput from '@/Components/TextInput';
import InputLabel from '../InputLabel';
import InputError from '../InputError';
import validarDocumento from '@/Providers/InputValidators'; // Ajusta esta ruta según sea necesario
import TextInputWithButton from "../TextInputWithButton";
import { FaSearch, FaDollarSign } from 'react-icons/fa';
import Checkbox from "../Checkbox";

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
    const [tipoDePago, setTipoDePago] = useState({
        efectivo: false,
        tarjeta: false,
        cheque: false
    });
    const [fechaTransaccion, setFechaTransaccion] = useState(formatDate(Date.now()));

    const validateInput = (value) => /^\d{0,13}$/.test(value);

    const handleSelect = (e) => {
        const { name, checked } = e.target;
        setTipoDePago((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const onlyNumbers = value.replace(/\D/g, '');
        setIdentificacionCliente(onlyNumbers);
        simulateUserSearch(onlyNumbers);
        if (value === '' || !error.success) {
            onIdentificacionChange({ success: false, identificacion: onlyNumbers }); // Enviar false al componente padre
        }
    };

    const simulateUserSearch = (identificacion) => {
        console.log('Simulando búsqueda de usuario con identificación:', identificacion);
        if (identificacion === '1313401117' && error.success) {
            setCliente('Jorge Ibarra');
            onIdentificacionChange({ success: true, identificacion }); // Enviar true al componente padre
        } else {
            setCliente('');
            onIdentificacionChange({ success: false, identificacion }); // Enviar false al componente padre
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            simulateUserSearch(identificacionCliente);
        }
    };

    useEffect(() => {
        setError(validarDocumento(identificacionCliente));
    }, [identificacionCliente]);

    return (
        <>
            <article className="relative rounded-xl p-4 bg-neutral-white/70 sm:p-6 lg:p-3 font-averta h-full shadow-xl">
                <strong
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-es-2xl rounded-ee-2xl px-1.5 py-1 
                    text-[15px] text-center  text-blue-800 font-bold"
                >
                    Cliente
                </strong>
                <div className="grid grid-cols-8 gap-4 mt-7">
                    <div className='w-full col-span-4'>
                        <h3 className="text-lg font-medium sm:text-4xl font-averta">
                            <div>
                                <InputLabel htmlFor="identificacion" value="Cédula o RUC / Nombre del cliente" className="text-gray-700 font-averta" />
                                <TextInputWithButton
                                    id="identificacion"
                                    type="text"
                                    name="identificacion"
                                    value={identificacionCliente}
                                    className="block w-full font-averta"
                                    autoComplete="identificacion"
                                    isFocused={true}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    icon={<FaSearch />}
                                    onButtonClick={handleKeyDown}
                                />
                                {(!error.success && identificacionCliente !== '') && <InputError message={error.msg} className="mt-2" />}
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
                                    className=" block w-full font-averta bg-primary-second/50"
                                    autoComplete="identificacion"
                                    isFocused={true}
                                    isDisabled={true}
                                />
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
                                    className=" block w-full font-averta bg-primary-second/50"
                                    autoComplete="identificacion"
                                    isFocused={true}
                                    isDisabled={true}
                                />
                            </div>
                        </h3>
                    </div>
                    <div className="w-full col-span-2">
                        <h3 className="text-lg font-medium sm:text-xl font-averta">
                            <InputLabel htmlFor="tipoPago" value="Tipo de Pago" className="text-gray-700 font-averta" />
                            <div className="grid grid-rows-3 grid-flow-col gap-4 mt-1">
                                <div className=" row-span-3  ">
                                    <PaymentOption
                                        label="Efectivo"
                                        name="efectivo"
                                        checked={tipoDePago.efectivo}
                                        onChange={handleSelect}
                                        icon={<FaDollarSign />}
                                    />
                                </div>
                                <div className="row-span-3">
                                    <PaymentOption
                                        label="Tarjeta"
                                        name="tarjeta"
                                        checked={tipoDePago.tarjeta}
                                        onChange={handleSelect}
                                        icon={<FaDollarSign />}
                                    />
                                </div>
                                <div className="row-span-3">

                                <PaymentOption
                                    label="Cheque"
                                    name="cheque"
                                    checked={tipoDePago.cheque}
                                    onChange={handleSelect}
                                    icon={<FaDollarSign />}
                                />
                                </div>
                            </div>
                        </h3>
                    </div>
                </div>
            </article>
        </>
    );
}

function PaymentOption({ label, name, checked, onChange, icon }) {
    return (
        <div className=" p-3 ">
            <div className="flex items-center space-x-2 ">
                <Checkbox name={name} checked={checked} onChange={onChange} />
                <label htmlFor={name} className="text-gray-900 ">
                    {label}
                </label>
            </div>
            {checked && (
                <div className="mt-2 transition-opacity duration-300 ease-in-out ">
                    <TextInputWithButton
                        classNameButton="bg-white text-green-500 "
                        icon={icon}
                        buttonDisable={true}
                    />
                </div>
            )}
        </div>
    );
}
