const convert2ModuleName = (name) => {
  return name.replaceAll('-', '_');
};

module.exports = {
  convert2ModuleName,
};
