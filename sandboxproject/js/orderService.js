export function calculateOrder(formData) {
  let total = parseFloat(formData.size);
  total += parseFloat(formData.coffee);
  formData.extras.forEach((extra) => (total += parseFloat(extra)));
  return total;
}
