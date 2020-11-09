let navigator;

export function setNavigator(ref) {
  // seta o valor da "navigator" com o valor que recebe
  navigator = ref;
}

export function navigate(route, params = {}) {
  if (navigator) {
    navigator.navigate(route, params);
  }
}
