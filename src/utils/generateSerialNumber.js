export default function generateSerialNumber() {
  const char = '123456ABCDEFGHI76wndixdzsfszfs2009765210ojfngdBNMUOP'
  const serialLength = 20
  let randomKey = ''
  for (let i = 0; i < serialLength; ++i) {
    let randomSingle = char[Math.floor(Math.random() * char.length)]
    randomKey += randomSingle
  }
  return randomKey
}
