export default function debounce(fn, delay) {
  let timer = null

  return () => {
    let context = this, args = arguments

    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)

  }
}
