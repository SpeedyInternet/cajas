import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DataTable from '@/Components/DataTable'; 
import CardInfoUser from '@/Components/Cards/CardInfoUser';
import CardInfoEmploye from '@/Components/Cards/CardInfoEmploye';
import { useEffect, useState } from 'react';

export default function Dashboard({ auth }) {
    const [cuentaSeleccionada, setCuentaSeleccionada] = useState('CAJA AROSEMA TOLA_CAJA AROSEMA TOLA_1234'); // Caja que atiende el cajero logeado
    useEffect(() => {
        // console.log("Usuario autenticado: "+ auth.user.name);
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-primary-main leading-tight">Cobros</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-6">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="rounded-3xl bg-primary-main/15 shadow-lg  ring-black/5 overflow-hidden sm:rounded-lg p-10">
                    <div className='grid grid-flow-row gap-4'>
                            <div><CardInfoEmploye cajaSeleccionada={cuentaSeleccionada} userData={auth}/></div>
                            <div><CardInfoUser/></div>
                            <div>
                                <DataTable cuentaSeleccionada={cuentaSeleccionada}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}