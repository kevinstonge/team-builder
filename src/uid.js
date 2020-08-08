const uid = () => {
  const d = Date.now().toString(36);
  const r = Math.floor(Math.random() * 1000000000000).toString(36);
  return `${d}-${r}`;
};
export default uid;
