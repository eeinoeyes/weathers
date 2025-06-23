import { useEffect } from 'react'
import '../styles/StarCursor.css'
function randomColor() {
   const colors = ['#ff7675', '#74b9ff', '#ffeaa7', '#55efc4', '#fd79a8', '#a29bfe', '#fab1a0']
   return colors[Math.floor(Math.random() * colors.length)]
}

function StarCursorEffect() {
   useEffect(() => {
      const handleMouseMove = (e) => {
         const star = document.createElement('div')
         star.className = 'falling-star'
         star.style.left = `${e.clientX}px`
         star.style.top = `${e.clientY}px`
         star.style.color = randomColor()

         document.body.appendChild(star)

         setTimeout(() => {
            star.remove()
         }, 1000)
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
   }, [])

   return null
}

export default StarCursorEffect
