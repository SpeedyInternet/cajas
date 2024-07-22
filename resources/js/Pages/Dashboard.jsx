import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DataTable from '@/Components/DataTable';
import CardInfoUser from '@/Components/Cards/CardInfoUser';
import CardInfoEmploye from '@/Components/Cards/CardInfoEmploye';
import { useEffect, useState } from 'react';
import TotalFactura from '@/Components/Cards/TotalFactura';

export default function Dashboard({ auth }) {
    const [cuentaSeleccionada, setCuentaSeleccionada] = useState('CAJA AROSEMA TOLA_CAJA AROSEMA TOLA_1234'); // Caja que atiende el cajero logeado
    const [identificacionCliente, setIdentificacionCliente] = useState('');
    const [initialDataTable, setInitialDataTable] = useState(null);
    const [totalFactura, setTotalFactura] = useState();
    const handleIdentificacionChange = (newIdentificacion) => {
        setIdentificacionCliente(newIdentificacion);
      };

    useEffect(() => {
        console.log('Identificación del cliente:', identificacionCliente);
    }, [identificacionCliente]);

    useEffect(() => {
        console.log('Data modificada:', initialDataTable);
        // console.log(initialData.length)
        // Aplicar sumatoria del total
        let sumatoria = 0;
        initialDataTable?.forEach(factura => {
            sumatoria = factura.pagoIngresado;
        });
        setTotalFactura(sumatoria);
    }, [initialDataTable]);

    useEffect(() => {
        setInitialDataTable(initialData);
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
                            <div className='grid grid-cols-10 gap-4'>
                                <div className='col-span-8'>
                                    <CardInfoUser onIdentificacionChange={ handleIdentificacionChange }/>
                                </div>
                                <div className='col-span-2'> 
                                    <TotalFactura total={totalFactura} /> 
                                </div>
                            </div>
                            <div>
                                <DataTable setFacturas={initialData} setInitialData={setInitialDataTable} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

const initialData = [
    {
      id: 3,
      factura: '12347',
      monto: '25.3',
      localizacion: 'Puyo',
      fecha: '2024-08-18',
      totalCosto: '15',
      expanded: true,
      deadTime: -5,
      pagoIngresado: '0.00',
      programaDePagos: [
        { id: 1, fecha: '2024-08-22', cantidad: 5.00, localizacion: 'Quitumbe', pagoIngresado: '0.00' },
        { id: 2, fecha: '2024-09-22', cantidad: 5.00, localizacion: 'Cayambe', pagoIngresado: '0.00' },
        { id: 3, fecha: '2024-10-22', cantidad: 5.00, localizacion: 'Centro histórico', pagoIngresado: '0.00' }
      ]
    },
    {
      id: 2,
      factura: '12346',
      monto: '150',
      localizacion: 'Quito',
      fecha: '2024-08-22',
      totalCosto: '13.87',
      expanded: true,
      deadTime: -5,
      pagoIngresado: '0.00',
      programaDePagos: [
        { id: 1, fecha: '2024-08-22', cantidad: 18.19, localizacion: 'Quitumbe', pagoIngresado: '0.00' },
        { id: 2, fecha: '2024-09-22', cantidad: 18.19, localizacion: 'Cayambe', pagoIngresado: '0.00' },
        { id: 3, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Centro histórico', pagoIngresado: '0.00' },
        { id: 4, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Centro histórico', pagoIngresado: '0.00' },
        { id: 5, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Centro histórico', pagoIngresado: '0.00' },
        { id: 6, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Centro histórico', pagoIngresado: '0.00' }
      ]
    },
    {
      id: 1,
      factura: '12345',
      monto: '100',
      localizacion: 'Ambato',
      fecha: '2024-08-15',
      totalCosto: '25.45',
      expanded: true,
      deadTime: 15,
      pagoIngresado: '0.00',
    },
  ];
