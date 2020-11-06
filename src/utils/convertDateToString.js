export default function (date) {
  console.log(date);
  let [mes, dia, ano] = date.split('/');

  return `${dia}/${mes - 1}/${ano}`;
}
