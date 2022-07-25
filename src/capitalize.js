const capitalize = (str) => {
  const Capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return Capitalized;
}

module.exports=capitalize;