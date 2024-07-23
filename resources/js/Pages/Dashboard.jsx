import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import MyDataTable from '@/Components/DataTable';
import CardInfoUser from '@/Components/Cards/CardInfoUser';
import CardInfoEmploye from '@/Components/Cards/CardInfoEmploye';
import { useEffect, useState } from 'react';
import TotalFactura from '@/Components/Cards/TotalFactura';
import Swal from 'sweetalert2';
import DataTableSkeleton from '@/Components/Skeletons/DataTableSkeleton';

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

export default function Dashboard({ auth }) {
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState('');
  const [identificacionCliente, setIdentificacionCliente] = useState('');
  const [initialDataTable, setInitialDataTable] = useState([]);
  const [totalFactura, setTotalFactura] = useState(0);
  const [datosCargados, setDatosCargados] = useState({});
// hooks para carga de datos
  const [loading, setLoading] = useState(true);

  const handleIdentificacionChange = (found) => {
    setDatosCargados(found);
  };
  
  useEffect(() => {
    console.log(datosCargados);
    console.log(loading);
    if (datosCargados.success) {
      // Simular la carga de datos
      setTimeout(() => {
        setInitialDataTable(initialData); // Usa tus datos reales aquí
        setLoading(false);
      }, 5000); // Simular un retraso de 10 segundos
    }else{
      setLoading(true); // Usa tus datos reales aquí
    }
  }, [datosCargados]);
  
  useEffect(() => {
    const mostrarSweetAlert = async () => {
      const { value: seleccion } = await Swal.fire({
        title: 'Selecciona la caja de cobros',
        input: 'select',
        inputOptions: {
          'CAJA AROSEMA TOLA_CAJA AROSEMA TOLA_1234': 'Caja Arosema Tola',
          'OTRA_OPCION': 'Otra Opción'
        },
        inputPlaceholder: 'Selecciona la caja de cobros',
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value) {
              resolve();
            } else {
              resolve('Debes seleccionar la caja');
            }
          });
        },
      });

      if (seleccion) {
        const { value: validacion } = await Swal.fire({
          html: `<b>Seleccionaste</b> \n <div>${seleccion}</div>`,
          showCancelButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
        if (validacion) {
          setCuentaSeleccionada(seleccion);
        } else {
          mostrarSweetAlert();
        }
      }
    };

    mostrarSweetAlert();
  }, []);

  useEffect(() => {
    console.log('Identificación del cliente:', identificacionCliente);
  }, [identificacionCliente]);

  useEffect(() => {
    console.log('Data modificada:', totalFactura);
  }, [totalFactura]);

  const handleTotalChange = (newTotal) => {
    setTotalFactura(newTotal);
  };

  const handleRegistrarPago = async () => {
    const detallesFactura = initialDataTable.map(factura => 
      factura.pagoIngresado>0?
      `
      <b>Factura:</b> ${factura.factura}<br/>
      <b>Localización:</b> ${factura.localizacion}<br/>
      <b>Fecha:</b> ${factura.fecha}<br/>
      <b>Monto:</b> ${factura.monto}<br/>
      <b>Pago Ingresado:</b> ${factura.pagoIngresado}<br/><br/>
    `:'').join('');

    if(initialData){
      
    }
    const { value: confirmacion } = await Swal.fire({
      title: 'Confirmar Ingreso de Pago',
      html: `
        <div>
          ${detallesFactura}
          <b>Total a pagar:</b> ${totalFactura.toFixed(2)} $
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      allowEscapeKey: false,
    });

    if (confirmacion) {
      // Lógica para registrar el pago
      console.log('Pago confirmado');
    } else {
      console.log('Pago cancelado');
    }
  };

  if (!cuentaSeleccionada) {
    return null; // O puedes mostrar un spinner de carga aquí
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-2xl text-primary-main leading-tight">Cobros</h2>}
    >
      <Head title="Dashboard" />
      <div className="py-6">
        <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary-main/15 shadow-lg ring-black/5 overflow-hidden sm:rounded-lg p-10">
            <div className='grid grid-flow-row gap-4'>
              <div><CardInfoEmploye cajaSeleccionada={cuentaSeleccionada} userData={auth} /></div>
              <div className='grid grid-cols-10 gap-4'>
                <div className='col-span-8'>
                  <CardInfoUser onIdentificacionChange={handleIdentificacionChange} />
                </div>
                <div className='col-span-2'>
                  <TotalFactura total={totalFactura} onRegistrarPago={handleRegistrarPago} />
                </div>
              </div>
              <div>
                {datosCargados.success === true ? (
                  loading?
                  (<DataTableSkeleton /> )
                  :
                  (<MyDataTable setFacturas={initialDataTable} setInitialData={setInitialDataTable} onTotalChange={handleTotalChange} />)
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
