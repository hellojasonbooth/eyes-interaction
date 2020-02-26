// code here

// reference to pupils
const leftEyePupil = document.querySelector('.pupil')
const leftEyePupil2 = document.querySelector('.pupil3')
const leftEyePupil3 = document.querySelector('.pupil4')

const rightEyePupil = document.querySelector('.pupil2')
const rightEyePupil4 = document.querySelector('.pupil5')
const rightEyePupil5 = document.querySelector('.pupil6')

const section =  document.querySelector('.eye-section')

// reference the size of the white of the eye
// because both whites are the same size we only need to reference one
const leftEye = document.querySelector('.eye')

// reference the other elements so we can add them to
// the translation too
const rightEye = document.querySelector('.eye2')
const mouth = document.querySelector('.mouth')

// get width and height of the white of the eye
const leftEyeWidth = leftEye.getBoundingClientRect().width
const leftEyeHeight = leftEye.getBoundingClientRect().height

// get width and height of pupils
const pupilWidth = leftEyePupil.getBoundingClientRect().width
const pupilHeight = leftEyePupil.getBoundingClientRect().height

// center of movement
const xMovement = (leftEyeWidth - pupilWidth) / 2
const yMovement = (leftEyeHeight - pupilHeight) / 2


section.addEventListener('mousemove', updateEyePosition)



function updateEyePosition(event) {

  let posX = ((event.clientX / section.clientWidth) * 2 - 1) * xMovement
  let posY = ((event.clientY / section.clientHeight) * 2 - 1) * yMovement

    leftEyePupil.style.transform = `translate(${posX * 6}px, ${posY}px)`
    leftEyePupil2.style.transform = `translate(${posX * 6}px, ${posY}px)`
    leftEyePupil3.style.transform = `translate(${posX * 6}px, ${posY}px)`

    rightEyePupil.style.transform = `translate(${posX}px, ${posY * 6}px)`
    rightEyePupil4.style.transform = `translate(${posX}px, ${posY * 6}px)`
    rightEyePupil5.style.transform = `translate(${posX}px, ${posY * 6}px)`

    leftEye.style.transform = `translate(${posX * 3.5}px, ${posY * 3.5}px)`
    rightEye.style.transform = `translate(${posX * 3.5}px, ${posY * 3.5}px)`
    mouth.style.transform = `translate(${posX * 2}px, ${posY * 2}px)`
 	
}

section.addEventListener('mouseleave', function () {
  leftEye.style.transform = ''
  rightEye.style.transform = ''
  mouth.style.transform = ''
})