const runCatAnime = () => {
  document.querySelectorAll('.category').forEach((el, i) => {
    anime({
      targets: el,
      translateY: [-30, 0],
      opacity: [0, 1],
      delay: i * 100
    })
  })
}

runCatAnime()

const cats = document.querySelectorAll('.category')

const searchCategory = (val) => {
  cats.forEach((el, i) => {
    var cat_name = el.dataset.name.toLowerCase().replace(/\s+/g, '')
    if (cat_name.includes(val)) {
      el.style.display = 'flex'
    } else {
      el.style.display = 'none'
    }
  })
  runCatAnime()
}