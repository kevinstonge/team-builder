export default function uid() {
  return `${Date.now().toString(36)}-${Math.floor(
    Math.random() * 1000000000000
  ).toString(36)}`;
}
