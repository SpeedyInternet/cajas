const validarDocumento = (numero) => {
   console.log(numero);

   // Verificar que el campo no contenga letras
   if (!/^\d+$/.test(numero)) {
      return 'No puede ingresar caracteres en el número';
   }

   if (numero.length < 10) {
      return 'El número ingresado no es válido';
   }

   // Los primeros dos dígitos corresponden al código de la provincia
   const numeroProvincias = 22;
   const provincia = parseInt(numero.substr(0, 2), 10);
   if (provincia < 1 || provincia > numeroProvincias) {
      return 'El código de la provincia (dos primeros dígitos) es inválido';
   }

   // Almacenar los dígitos del documento en variables
   const d1 = parseInt(numero.charAt(0), 10);
   const d2 = parseInt(numero.charAt(1), 10);
   const d3 = parseInt(numero.charAt(2), 10);
   const d4 = parseInt(numero.charAt(3), 10);
   const d5 = parseInt(numero.charAt(4), 10);
   const d6 = parseInt(numero.charAt(5), 10);
   const d7 = parseInt(numero.charAt(6), 10);
   const d8 = parseInt(numero.charAt(7), 10);
   const d9 = parseInt(numero.charAt(8), 10);
   const d10 = parseInt(numero.charAt(9), 10);

   // Validar el tercer dígito
   if (d3 === 7 || d3 === 8) {
      return 'El tercer dígito ingresado es inválido';
   }

   let suma;
   let residuo;
   let digitoVerificador;
   let modulo;

   if (d3 < 6) {
      // Validación para personas naturales (módulo 10)
      const p1 = d1 * 2 >= 10 ? d1 * 2 - 9 : d1 * 2;
      const p2 = d2 * 1 >= 10 ? d2 * 1 - 9 : d2 * 1;
      const p3 = d3 * 2 >= 10 ? d3 * 2 - 9 : d3 * 2;
      const p4 = d4 * 1 >= 10 ? d4 * 1 - 9 : d4 * 1;
      const p5 = d5 * 2 >= 10 ? d5 * 2 - 9 : d5 * 2;
      const p6 = d6 * 1 >= 10 ? d6 * 1 - 9 : d6 * 1;
      const p7 = d7 * 2 >= 10 ? d7 * 2 - 9 : d7 * 2;
      const p8 = d8 * 1 >= 10 ? d8 * 1 - 9 : d8 * 1;
      const p9 = d9 * 2 >= 10 ? d9 * 2 - 9 : d9 * 2;

      suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
      modulo = 10;
   } else if (d3 === 6) {
      // Validación para sociedades públicas (módulo 11)
      const p1 = d1 * 3;
      const p2 = d2 * 2;
      const p3 = d3 * 7;
      const p4 = d4 * 6;
      const p5 = d5 * 5;
      const p6 = d6 * 4;
      const p7 = d7 * 3;
      const p8 = d8 * 2;

      suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;
      modulo = 11;

      digitoVerificador = suma % modulo === 0 ? 0 : modulo - suma % modulo;
      if (digitoVerificador !== d9) {
         return 'El ruc de la empresa del sector público es incorrecto.';
      }
      if (numero.substr(9, 4) !== '0001') {
         return 'El ruc de la empresa del sector público debe terminar con 0001';
      }
      return true;
   } else if (d3 === 9) {
      // Validación para entidades privadas (módulo 11)
      const p1 = d1 * 4;
      const p2 = d2 * 3;
      const p3 = d3 * 2;
      const p4 = d4 * 7;
      const p5 = d5 * 6;
      const p6 = d6 * 5;
      const p7 = d7 * 4;
      const p8 = d8 * 3;
      const p9 = d9 * 2;

      suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
      modulo = 11;

      digitoVerificador = suma % modulo === 0 ? 0 : modulo - suma % modulo;
      if (digitoVerificador !== d10) {
         return 'El ruc de la empresa del sector privado es incorrecto.';
      }
      if (numero.substr(10, 3) !== '001') {
         return 'El ruc de la empresa del sector privado debe terminar con 001';
      }
      return true;
   }

   residuo = suma % modulo;
   digitoVerificador = residuo === 0 ? 0 : modulo - residuo;

   if (digitoVerificador !== d10) {
      return 'El número de cédula de la persona natural es incorrecto.';
   }
   if (numero.length > 10 && numero.substr(10, 3) !== '001') {
      return 'El ruc de la persona natural debe terminar con 001';
   }

   return true;
};

export default validarDocumento;
