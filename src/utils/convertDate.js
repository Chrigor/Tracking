export default function (date, hora = '00:00') {
  const [dia, mes, ano] = date.split('/');

  return new Date(`${ano}-${mes - 1}-${dia} ${hora}`);
}
