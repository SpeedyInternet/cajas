import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import TextInput from './TextInput';
// Se elimina el botón expandible ya que no será necesario
const columns = [
  {
    name: 'Factura',
    selector: row => row.factura,
    sortable: true,
    width: '150px',
  },
  {
    name: 'Monto',
    selector: row => row.monto,
    sortable: true,
    width: '150px',
  },
  {
    name: 'Localización',
    selector: row => row.localizacion,
    sortable: true,
    width: '200px',
  },
  {
    name: 'Fecha',
    selector: row => row.fecha,
    sortable: true,
    width: '200px',
  },
  {
    name: 'Total Costo',
    selector: row => row.totalCosto,
    sortable: true,
  },
  {
    name: 'Insertar pago',
    selector: row => (<TextInput></TextInput>),
    sortable: true,
  },
];

const columnsProgramaPagos = [
  {
    name: 'Fecha',
    selector: row => row.fecha,
    sortable: true,
    width: '150px',
  },
  {
    name: 'Localización',
    selector: row => row.localizacion,
    sortable: true,
    width: '200px',
  },
  {
    name: 'Cantidad',
    selector: row => row.cantidad,
    sortable: true,
    width: '150px',
  },
];

const customStyles = {
  header: {
    style: {
      minHeight: '56px',
      backgroundColor: '#002b36',
      color: '#244491',
      backdropFilter: 'blur(5px)',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#475c8a',
      color: '#268bd2',
    },
  },
  headCells: {
    style: {
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'uppercase',
      color: '#e6eef6',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      color: '#93a1a1',
    },
  },
  rows: {
    style: {
      '&:not(:last-of-type)': {
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '#073642',
      },
    },
  },
};

const data = [
  { id: 2, factura: '12346', monto: '150', localizacion: 'Quito', fecha: '2017-08-22', totalCosto: '13.87', expanded: true, 
    programaDePagos: [ { id: 1, fecha: '2024-08-22', cantidad: 18.19, localizacion: 'Quito' } , { id: 2, fecha: '2024-09-22', cantidad: 18.19, localizacion: 'Quito' } , { id: 3, fecha: '2024-10-22', cantidad: 18.19, localizacion: 'Quito' } ]
  },
  { id: 1, factura: '12345', monto: '100', localizacion: 'Ambato', fecha: '2017-08-22', totalCosto: '25.45', expanded: true, 
    // programaDePagos: [ { id: 1, fecha: '2024-05-22', cantidad: 18.19, localizacion: 'Ambato' } , { id: 2, fecha: '2024-06-22', cantidad: 18.19, localizacion: 'Ambato' } , { id: 3, fecha: '2024-07-22', cantidad: 18.19, localizacion: 'Ambato' } ]
  },
];

export default function MyDataTable() {
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    // Establecer todas las filas como expandidas por defecto
    setTableData(prevData => prevData.map(item => ({ ...item, expanded: true })));
  }, []);

  const expandedComponent = ({ data }) => (
    <div className="grid grid-cols-10 p-4 gap-5">
      <div className='col-span-3'>
        <p>PROGRAMA DE PAGOS HABILITADO</p>
      </div>
      <div className='grid col-span-6 bg-slate-400 rounded-xl shadow-lg'>
        <DataTable
          columns={columnsProgramaPagos}
          data={data.programaDePagos}
          customStyles={customStyles}
        />
      </div>
    </div>
  );

  return (
    <DataTable
      columns={columns}
      data={tableData}
      expandableRows
      expandableRowsComponent={expandedComponent}
      expandableRowExpanded={() => true} // Siempre devuelve true para mantener todas las filas expandidas
      expandableRowsHideExpander={true}
      pagination={data.length > 5 ? true : false}
      customStyles={customStyles}
    />
  );
}
