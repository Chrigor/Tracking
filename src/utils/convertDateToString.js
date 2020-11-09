export default function (date) {
  let [mes, dia, ano] = date.split('/');

  return `${dia}/${mes}/${ano}`;
}
