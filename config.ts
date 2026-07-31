/**
 * Hotmart Integration Configuration
 * 
 * Reemplaza la URL a continuación con el enlace de checkout oficial de Hotmart de tu producto.
 * Ejemplo: "https://pay.hotmart.com/X12345678Y"
 */
export const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/YOUR_HOTMART_CHECKOUT_CODE";

/**
 * Redirige directamente al checkout de Hotmart en la misma pestaña.
 */
export const handleHotmartCheckout = () => {
  window.location.href = HOTMART_CHECKOUT_URL;
};
