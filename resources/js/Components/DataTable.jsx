import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import TextInput from './TextInput';

const customStylesPrgmDPgs = {
  tableWrapper: {
    style: {
      display: 'table',
    },
  },
  responsiveWrapper: {
    style: {},
  },
  header: {
    style: {
      backgroundColor: '#002b36',
      color: '#244491',
      backdropFilter: 'blur(5px)',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#cdd8dd',
      color: '#072434',
      minHeight: '20px',
    },
  },
  headCells: {
    style: {
      fontSize: '11px',
      fontWeight: '500',
      textTransform: 'uppercase',
      color: '#002b36',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      color: '#93a1a1',
    },
  },
  rows: {
    style: {
      minHeight: '10px',
    },
  },
  pagination: {
    style: {
      color: '#e6eef6',
      backgroundColor: '#002b36',
    },
  },
};

// Estilos de la tabla principal
const customStyles = {
  header: {
    style: {
      borderRadius: '10px 10px 0px 0px',
      color: '#475c8a',
    },
  },
  headRow: {
    style: {
      minHeight: '35px',
      backgroundColor: '#475c8a',
      color: '#268bd2',
    },
  },
  headCells: {
    style: {
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      color: '#e6eef6',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
    },
  },
  rows: {
    style: {
      // backgroundColor: '#ffffff',
      '&:not(:last-of-type)': {
        borderBottom: '1px solid #8c8c8c8c',
        borderTop: '1px solid #8c8c8c8c',
        borderRadius: '12px 12px 2px 2px ',
      },
    },
  },
  pagination: {
    style: {
      color: '#e6eef6',
      backgroundColor: '#4B72A6',
      borderRadius: '0px 0px 12px 12px',
    },
  },
};

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
    pagoIngresado: 0.00,
    programaDePagos: [
      { id: 1, fecha: '2024-08-22', cantidad: 5.00, localizacion: 'Quitumbe', pagoIngresado: 0.00 },
      { id: 2, fecha: '2024-09-22', cantidad: 5.00, localizacion: 'Cayambe', pagoIngresado: 0.00 },
      { id: 3, fecha: '2024-10-22', cantidad: 5.00, localizacion: 'Centro histórico', pagoIngresado: 0.00 }
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
    pagoIngresado: 0.00,
    programaDePagos: [
      { id: 1, fecha: '2024-08-22', cantidad: 18.19, localizacion: 'Quitumbe', pagoIngresado: 0.00 },
      { id: 2, fecha: '2024-09-22', cantidad: 18.19, localizacion: 'Cayambe', pagoIngresado: 0.00 },
      { id: 3, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Centro histórico', pagoIngresado: 0.00 },
      { id: 4, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Centro histórico', pagoIngresado: 0.00 },
      { id: 5, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Centro histórico', pagoIngresado: 0.00 },
      { id: 6, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Centro histórico', pagoIngresado: 0.00 }
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
    pagoIngresado: 0.00,
  },
];

export default function MyDataTable() {
  const [tableData, setTableData] = useState(initialData);

  const handleInputChange = (idFactura, value) => {
    // Validar el formato de entrada
    const regex = /^\d*\.?\d*$/;
    if (value === '' || regex.test(value)) {
      // Formatear el valor
      let formattedValue = value;
      if (value === '') {
        formattedValue = '0.00';
      } else if (value.endsWith('.')) {
        formattedValue = value + '0';
      }
      handleInsertPrecio(idFactura, formattedValue);
    }
  };

  const handleInsertPrecio = (idFactura, valorInsertado) => {
    const parsedValue = parseFloat(valorInsertado);
    const validValue = isNaN(parsedValue) ? parseFloat(0.00) : parsedValue;

    setTableData(prevData =>
      prevData.map(item => {
        if (item.id === idFactura) {
          const numProgramas = item.programaDePagos?.length || 1;
          const pagoPorPrograma = (validValue / numProgramas).toFixed(2);

          const updatedItem = {
            ...item,
            pagoIngresado: validValue,
            programaDePagos: item.programaDePagos?.map(pago => ({
              ...pago,
              pagoIngresado: parseFloat(pagoPorPrograma),
            })) || item.programaDePagos
          };
          return updatedItem;
        }
        return item;
      })
    );
  };

  const columns = [
    {
      name: 'Factura',
      selector: row => row.factura,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Fecha facturación',
      selector: row => row.fecha,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Localización',
      selector: row => row.localizacion,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Subtotal',
      selector: row => Number(row.monto).toFixed(2),
      sortable: true,
      width: '150px',
    },
    {
      name: 'Total',
      selector: row => (Number(row.monto) + (Number(row.monto) * 0.15)).toFixed(2),
      sortable: true,
    },
    {
      name: 'Ingresar pago',
      cell: row => (
        <div className='p-2'>
          <TextInput
            id={row.id}
            className='w-28'
            value={row.pagoIngresado}
            onChange={e => handleInputChange(row.id, e.target.value)}
          />
        </div>
      ),
    },
    {
      name: 'Días de vencimiento',
      selector: row => Number(row.deadTime),
      sortable: true,
    },
  ];

  const columnsProgramaPagos = [
    {
      name: 'Fecha',
      selector: row => row.fecha,
      sortable: true,
    },
    {
      name: 'Localización',
      selector: row => row.localizacion,
      sortable: true,
    },
    {
      name: 'Cantidad',
      selector: row => Number(row.cantidad).toFixed(2),
      sortable: true,
    },
    {
      name: 'Ingresar pago',
      cell: row => (
        <div className='p-1'>
          <TextInput
            className='w-full h-6'
            value={row.pagoIngresado}
            readOnly
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    // Establecer todas las filas como expandidas por defecto
    setTableData(prevData => prevData.map(item => ({ ...item, expanded: true })));
  }, []);

  const expandedComponent = ({ data }) => (
  <>
    <div className="grid grid-cols-10 p-2 gap-5 bg-slate-400 rounded-es-2xl rounded-ee-2xl shadow-2xl font-averta">
        { data.programaDePagos && data.programaDePagos.length > 0 ? (
          <>
            <div className='col-span-2'>
              <div className='flex items-center justify-center h-28 text-white font-bold'>
                <p className=' rounded-xl p-2'>PROGRAMA DE PAGOS</p>
              </div>
            </div>
            <div className='grid col-span-6 bg-slate-400 rounded-xl shadow-lg'>
              <DataTable
                columns={columnsProgramaPagos}
                data={ data.programaDePagos }
                customStyles={ customStylesPrgmDPgs }
              />
            </div>
          </>
        ) : (
          <div className=''></div>
        )}
      </div>
      {/* <div className='h-2'></div> */}
  </>
  );

  return (
    <div className='rounded-xl shadow-2xl'>
      <DataTable
        columns={columns}
        data={tableData}
        expandableRows
        expandableRowsComponent={expandedComponent}
        expandableRowExpanded={() => true } // Siempre devuelve true para mantener todas las filas expandidas
        expandableRowsHideExpander={ true }
        pagination={tableData.length > 5}
        customStyles={ customStyles }
      />
    </div>
  );
}
