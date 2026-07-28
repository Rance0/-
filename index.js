// 回到顶部
const returnBtn = document.querySelector('.returnTop')
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    returnBtn.style.display = 'block'
  } else {
    returnBtn.style.display = 'none'
  }
})

returnBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑
  })
})