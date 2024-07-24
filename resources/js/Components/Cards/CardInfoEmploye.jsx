import { useEffect, useState } from "react";
import TextInput from '@/Components/TextInput';
import InputLabel from '../InputLabel';
import InputError from '../InputError';
import validarDocumento from '@/Providers/InputValidators'; // Ajusta esta ruta según sea necesario

export default function CardInfoEmploye({ cajaSeleccionada, userData }) {
    // const [cajaAtiende, setCajaAtiende] = useState(cajaSeleccionada || ''); // Inicializar con cajaSeleccionada
    const [user, setUse] = useState(userData.user || 'Aun no se obtiene el usuario'); // Inicializar con la autenticación del usuario
    const [error, setError] = useState('');

    useEffect(() => {
        console.log("Valor del usuario: "+ JSON.stringify(userData));
    }, []);

    return (
        <>
            <article className="relative rounded-xl p-4 bg-neutral-white/70 sm:p-6 lg:p-3 font-averta h-full shadow-xl ">
                <strong
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-es-2xl rounded-ee-2xl px-1.5 py-1 
                    text-[15px] text-center  text-blue-800 font-bold"
                >
                    Representante comercial
                </strong>
                <strong className="px-3 py-1.5 text-[20px] font-medium text-blue-300" />
                <div className="grid grid-flow-row gap-4">
                    <div className="flex items-center sm:gap-8">
                        <div className='w-full'>
                            <h3 className="text-lg font-medium sm:text-4xl font-averta">
                                <div>
                                    <InputLabel htmlFor="username" value="Nombres" className="text-gray-700 font-averta" />
                                    <TextInput
                                        id="username"
                                        type="text"
                                        name="username"
                                        value={ user.name }
                                        className="mt-1 block w-full font-averta bg-primary-second/50"
                                        autoComplete="username"
                                        isFocused={ false }
                                        isDisabled = { true }
                                    />
                                    {error && <InputError message={error} className="mt-2" />}
                                </div>
                            </h3>
                        </div>
                        <div className='w-full'>
                            <h3 className="text-lg font-medium sm:text-4xl font-averta">
                                <div>
                                    <InputLabel htmlFor="cajaAtiende" value="Cuenta Banco / Caja" className="text-gray-700 font-averta" />
                                    <TextInput
                                        id="cajaAtiende"
                                        type="text"
                                        name="cajaAtiende"
                                        value={ cajaSeleccionada.name }
                                        className="mt-1 block w-full font-averta bg-primary-second/50"
                                        autoComplete="cajaAtiende"
                                        isFocused={ false }
                                        isDisabled = { true }
                                    />
                                    {error && <InputError message={error} className="mt-2" />}
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
