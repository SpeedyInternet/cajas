/**
 * Validaciones para los inputs
 */
const regexValidators = {
    // Validación para identificaciones (por ejemplo, cédula)
    isValidIdentificacion: (value) => {
        const regex = /^\d{10}$/; // Solo números y longitud de 10 caracteres
        return regex.test(value);
    },

    // Validación para emails
    isValidEmail: (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de email básico
        return regex.test(value);
    },

    // Validación para números de teléfono
    isValidPhoneNumber: (value) => {
        const regex = /^\+?\d{10,15}$/; // Permite números con o sin el signo más y longitud entre 10 y 15 caracteres
        return regex.test(value);
    },

    // Validación para identificaciones (por ejemplo, cédula)
    isValidIdentificacion: (value) => {
        const regex = /^\d{0,13}$/; // Solo números y longitud de 0 a 13 caracteres
        return regex.test(value);
    },

    // Otras validaciones pueden agregarse aquí
};

export default regexValidators;
