const dateCounter = (datenumb) => {
  const nuvarandeDatum = new Date();
  const startWorkDate = new Date(datenumb);
  const tidsskillnad = nuvarandeDatum - startWorkDate;
  const antalDagar = Math.floor(tidsskillnad / (1000 * 60 * 60 * 24));
  return antalDagar;
};
export default dateCounter;
