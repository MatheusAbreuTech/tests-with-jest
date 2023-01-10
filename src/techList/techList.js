function techList(arrayWithTechs, stringName) {
  if (arrayWithTechs.length < 1) {
    return 'Vazio!';
  }

  const list = arrayWithTechs.map((value) => {
    return {
      tech: value,
      name: stringName,
    };
  });

  return list.sort(function (a, b) {
    return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
  });
}

module.exports = techList;
