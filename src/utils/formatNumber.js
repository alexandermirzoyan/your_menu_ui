export const formatNumber = (number) => String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
