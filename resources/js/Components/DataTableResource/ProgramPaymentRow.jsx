import React, { memo } from 'react';
import TextInput from '../TextInput';

const ProgramPaymentRow = memo(({ facturaId, program, validateInput, handleProgramPaymentChange, handleProgramPaymentBlur }) => {
  return (
    <div className='p-1'>
      <TextInput
        className='w-full h-6'
        value={program.pagoIngresado}
        validate={validateInput}
        onChange={e => handleProgramPaymentChange(facturaId, program.id, e.target.value)}
        onBlur={e => handleProgramPaymentBlur(facturaId, program.id, e.target.value)}
      />
    </div>
  );
});

export default ProgramPaymentRow;
