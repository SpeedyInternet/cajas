import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import TextInput from './TextInput';

export default function MyDataTable({ setFacturas, setInitialData, onTotalChange }) {
  const [tableData, setTableData] = useState(setFacturas);
  const [inputValues, setInputValues] = useState({});
  const focusedInputRef = useRef(null);

  const validateInput = useCallback((value) => /^\d{0,4}(\.\d{0,2})?$/.test(value), []);

  const handleInsertPrecio = useCallback((idFactura, valorInsertado) => {
    const updatedData = tableData.map(item => {
      if (item.id === idFactura) {
        const updatedItem = {
          ...item,
          pagoIngresado: valorInsertado
        };
        return updatedItem;
      }
      return item;
    });

    setTableData(updatedData);
    setInitialData(updatedData);
  }, [tableData, setInitialData]);

  const handleInputChange = useCallback((idFactura, value) => {
    handleInsertPrecio(idFactura, value);
  }, [handleInsertPrecio]);

  const handleFocus = useCallback((idFactura, idProgram) => {
    focusedInputRef.current = { idFactura, idProgram };
  }, []);

  const handleBlur = useCallback((idFactura, idProgram) => {
    focusedInputRef.current = null;
    setInputValues(prevValues => {
      const key = `${idFactura}-${idProgram}`;
      if (prevValues[key] === '') {
        return {
          ...prevValues,
          [key]: '0.00'
        };
      } else {
        return {
          ...prevValues,
          [key]: isNaN(Number(prevValues[key]).toFixed(2)) ? '0.00' : Number(prevValues[key]).toFixed(2)
        };
      }
    });

    const updatedData = tableData.map(item => {
      if (item.id === idFactura) {
        if (idProgram === null && item.pagoIngresado === '') {
          return {
            ...item,
            pagoIngresado: '0.00'
          };
        } else if (item.programaDePagos) {
          const updatedProgramaDePagos = item.programaDePagos.map(programa => {
            if (programa.id === idProgram && programa.pagoIngresado === '') {
              return {
                ...programa,
                pagoIngresado: '0.00'
              };
            }
            return programa;
          });

          return {
            ...item,
            programaDePagos: updatedProgramaDePagos
          };
        }
      }
      return item;
    });

    setTableData(updatedData);
    setInitialData(updatedData);
  }, [tableData, setInitialData]);

  const handleProgramPaymentChange = useCallback((idFactura, idProgram, value) => {
    if (validateInput(value)) {
      setInputValues(prevValues => ({
        ...prevValues,
        [`${idFactura}-${idProgram}`]: value
      }));

      const updatedData = [...tableData];
      const facturaIndex = updatedData.findIndex(item => item.id === idFactura);
      if (facturaIndex !== -1) {
        const updatedProgramaDePagos = updatedData[facturaIndex].programaDePagos.map(programa => {
          if (programa.id === idProgram) {
            return { ...programa, pagoIngresado: value };
          }
          return programa;
        });

        const totalPagoIngresado = updatedProgramaDePagos.reduce((sum, program) => sum + parseFloat(program.pagoIngresado || 0), 0).toFixed(2);

        updatedData[facturaIndex] = {
          ...updatedData[facturaIndex],
          pagoIngresado: totalPagoIngresado,
          programaDePagos: updatedProgramaDePagos
        };

        setTableData(updatedData);
        setInitialData(updatedData);
      }
    }
  }, [tableData, validateInput, setInitialData]);

  const handleKeyDown = useCallback((event, idFactura, idProgram) => {
    if (event.key === 'Enter') {
      handleBlur(idFactura, idProgram);
      event.target.blur(); // Quita el foco del input
    }
  }, [handleBlur]);

  useEffect(() => {
    if (focusedInputRef.current) {
      const { idFactura, idProgram } = focusedInputRef.current;
      const inputElement = document.getElementById(`input-${idFactura}-${idProgram}`);
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [inputValues, tableData]);

  useEffect(() => {
    let sumatoria = 0;
    tableData?.forEach(factura => {
      sumatoria += parseFloat(factura.pagoIngresado) || 0;
    });
    onTotalChange(sumatoria);
    if (focusedInputRef.current) {
      const { idFactura, idProgram } = focusedInputRef.current;
      const inputElement = document.getElementById(`input-${idFactura}-${idProgram}`);
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [tableData, onTotalChange]);

  const columns = useMemo(() => [
    {
      name: 'No. Factura',
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
      name: 'Abonado',
      selector: row => (Number(row.monto) + (Number(row.monto) * 0.15)).toFixed(2)-10,
      sortable: true,
    },
    {
      name: 'Ingresar pago',
      cell: row => (
        <div className='p-2'>
          <TextInput
            id={`input-${row.id}-null`}
            className={row.programaDePagos ? 'w-28 bg-slate-200 font-bold' : 'w-28 font-bold'}
            isDisabled={row.programaDePagos ? true : false}
            value={row.pagoIngresado}
            validate={validateInput}
            onFocus={e => handleFocus(row.id, null)}
            onChange={e => handleInputChange(row.id, e.target.value)}
            onBlur={e => handleBlur(row.id, null, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, row.id, null)}
          />
        </div>
      ),
    },
  ], [handleFocus, handleInputChange, handleBlur, handleKeyDown, validateInput]);

  const columnsProgramaPagos = useMemo(() => [
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
            id={`input-${row.facturaId}-${row.id}`}
            className='w-full h-6'
            validate={validateInput}
            value={inputValues[`${row.facturaId}-${row.id}`] || row.pagoIngresado}
            onChange={e => handleProgramPaymentChange(row.facturaId, row.id, e.target.value)}
            onFocus={() => handleFocus(row.facturaId, row.id)}
            onBlur={() => handleBlur(row.facturaId, row.id)}
            onKeyDown={(e) => handleKeyDown(e, row.facturaId, row.id)}
          />
        </div>
      ),
    },
  ], [handleFocus, handleBlur, handleProgramPaymentChange, handleKeyDown, validateInput, inputValues]);

  const expandedComponent = useMemo(() => ({ data }) => (
    <>
      <div className="grid grid-cols-10 p-2 gap-5 bg-slate-400 rounded-es-2xl rounded-ee-2xl shadow-2xl font-averta">
        {data.programaDePagos && data.programaDePagos.length > 0 ? (
          <>
            <div className='col-span-2'>
              <div className='flex items-center justify-center h-28 text-white font-bold'>
                <p className='rounded-xl p-2'>PROGRAMA DE PAGOS</p>
              </div>
            </div>
            <div className='grid col-span-6 bg-slate-400 rounded-xl shadow-lg'>
              <DataTable
                columns={columnsProgramaPagos}
                data={data.programaDePagos.map(programa => ({ ...programa, facturaId: data.id }))}
                customStyles={customStylesPrgmDPgs}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  ), [columnsProgramaPagos]);

  return (
    <article className="relative rounded-xl p-4 bg-neutral-white/70 sm:p-6 lg:p-3 font-averta h-full shadow-xl ">
      <strong
        className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-es-2xl rounded-ee-2xl px-1.5 py-1 
          text-[15px] text-center text-blue-800 font-bold"
      >
        Facturas por cobrar
      </strong>
      <strong className="px-3 py-1.5 text-[20px] font-medium text-white" />
      <div className='rounded-xl shadow-2xl'>
        <div className='h-2'></div>
        <DataTable
          columns={columns}
          data={tableData}
          expandableRows
          expandableRowsComponent={expandedComponent}
          expandableRowExpanded={() => true}
          expandableRowsHideExpander={true}
          pagination={tableData.length > 10}
          paginationComponentOptions={paginationOptions}
          customStyles={customStyles}
        />
      </div>
    </article>
  );
}

const customStylesPrgmDPgs = {
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
      borderRight: '1px solid #ddd',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      color: '#93a1a1',
      borderRight: '1px solid #ddd',
    },
  },
  rows: {
    style: {
      minHeight: '10px',
      borderBottom: '1px solid #ddd',
    },
  },
};

const customStyles = {
  headRow: {
    style: {
      minHeight: '35px',
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
      borderRight: '1px solid #8c8c8c',
    },
  },
  cells: {
    style: {
      fontSize: '15px',
      borderRight: '1px solid #ddd',
    },
  },
  rows: {
    style: {
      '&:not(:last-of-type)': {
        borderBottom: '1px solid #8c8c8c',
      },
    },
  },
  pagination: {
    style: {
      color: '#94a3b8',
      backgroundColor: '#eee',
      borderRadius: '0px 0px 12px 12px',
      minHeight: '50px',
    },
    pageButtonsStyle: {
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      padding: '8px',
      margin: '0 4px',
      cursor: 'pointer',
      transition: '0.3s',
      color: '#ffffff',
      fill: '#ffffff',
      backgroundColor: '#6c757d',
      '&:hover:not(:disabled)': {
        backgroundColor: '#343a40',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        color: '#868e96',
        fill: '#868e96',
      },
      '&.selected': {
        backgroundColor: '#007bff',
        color: '#ffffff',
        fill: '#ffffff',
      },
    },
  },
};

const paginationOptions = {
  rowsPerPageText: 'Filas por página:',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
};
