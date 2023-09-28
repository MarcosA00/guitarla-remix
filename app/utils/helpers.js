export const formatDate = date => {
  const newDate = new Date(date);

  const op = {
    day: '2-digit', 
    month: 'long', 
    year: 'numeric'
  }

  return newDate.toLocaleDateString('es-Es', op);
}