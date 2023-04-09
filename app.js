let nextBox = 111
const listOfBackgroundColors = ['bg-blue-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-red-500', 'bg-gray-400', 'bg-pink-400']
const listOfWidths = ['px-6', 'px-8', 'px-10', 'px-12']
const listOfHights = ['py-8', 'py-12', 'py-16', 'py-24']

const app = document.createElement('DIV')
app.classList.add('w-11/12', 'p-5', 'm-auto')

const container = document.createElement('DIV')
container.classList.add('flex', 'h-96', 'bg-white', 'shadow', 'rounded-lg', 'shadow-md', 'border', 'text-sm', 'font-medium', 'text-gray-500', 'flex-grow-0')
app.appendChild(container)

const playground = document.createElement('DIV')
playground.classList.add('w-8/12', 'flex', 'flex-row', 'items-center', 'overflow-hidden')
container.appendChild(playground)
let playgroundBoxesArray = [nextBox]
playground.appendChild(createBoxElement(nextBox))

const classListDiv = document.createElement('DIV')
classListDiv.classList.add('w-8/12', 'text-gray-400', 'px-2', 'py-2', 'flex', 'flex-col', 'items-center', 'justify-center', 'flex-grow-0', 'flex-shrink-0')
updateClassListDiv()
app.appendChild(classListDiv)

const dashboard = document.createElement('DIV')
dashboard.classList.add('w-4/12', 'border-l', 'bg-gray-100', 'px-1', 'py-4', 'flex', 'flex-row', 'items-end', 'flex-grow-0', 'flex-shrink-0')
container.appendChild(dashboard)

const newBoxContainer = document.createElement('DIV')
newBoxContainer.classList.add('flex', 'flex-col', 'items-center', 'w-full')
dashboard.appendChild(newBoxContainer)
newBoxContainer.appendChild(createBoxElement(nextBox))

const buttonsField = document.createElement('DIV')
buttonsField.classList.add('mt-6')
newBoxContainer.appendChild(buttonsField)
buttonsField.appendChild(createButton('Add', 'addBox()'))
buttonsField.appendChild(createButton('Delete Last', 'deleteLastBox()'))
buttonsField.appendChild(createButton('Delete All', 'deleteAllBoxes()'))

const controlsWrapper = document.createElement('DIV')
controlsWrapper.classList.add('flex', 'flex-wrap')

const fieldsetDirection = document.createElement('FIELDSET')
fieldsetDirection.classList.add('mt-6', 'mr-6')
const legendDirection = document.createElement('LEGEND')
legendDirection.classList.add('text-base', 'font-medium', 'text-gray-500')
legendDirection.textContent = 'Flex Direction'
fieldsetDirection.appendChild(legendDirection)
fieldsetDirection.appendChild(createRadio('Direction', 'Flex Row', true))
fieldsetDirection.appendChild(createRadio('Direction', 'Flex Col'))
fieldsetDirection.appendChild(createRadio('Direction', 'Flex Row reverse'))
fieldsetDirection.appendChild(createRadio('Direction', 'Flex Col reverse'))
fieldsetDirection.appendChild(createRadio('Direction', 'Not Set'))
controlsWrapper.appendChild(fieldsetDirection)

const fieldsetAlignDirection = document.createElement('FIELDSET')
fieldsetAlignDirection.classList.add('mt-6', 'mr-6')
const legendAlignDirection = document.createElement('LEGEND')
legendAlignDirection.classList.add('text-base', 'font-medium', 'text-gray-500')
legendAlignDirection.textContent = 'Justify Content'
fieldsetAlignDirection.appendChild(legendAlignDirection)
fieldsetAlignDirection.appendChild(createRadio('AlignDirection', 'Justify Start', true))
fieldsetAlignDirection.appendChild(createRadio('AlignDirection', 'Justify End'))
fieldsetAlignDirection.appendChild(createRadio('AlignDirection', 'Justify Center'))
fieldsetAlignDirection.appendChild(createRadio('AlignDirection', 'Justify Between'))
fieldsetAlignDirection.appendChild(createRadio('AlignDirection', 'Justify Around'))
fieldsetAlignDirection.appendChild(createRadio('AlignDirection', 'Justify Evenly'))
fieldsetAlignDirection.appendChild(createRadio('AlignDirection', 'Not Set'))
controlsWrapper.appendChild(fieldsetAlignDirection)

const fieldsetAlignItems = document.createElement('FIELDSET')
fieldsetAlignItems.classList.add('mt-6', 'mr-6')
const legendAlignItems = document.createElement('LEGEND')
legendAlignItems.classList.add('text-base', 'font-medium', 'text-gray-500')
legendAlignItems.textContent = 'Align Items'
fieldsetAlignItems.appendChild(legendAlignItems)
fieldsetAlignItems.appendChild(createRadio('AlignItems', 'Items Center', true))
fieldsetAlignItems.appendChild(createRadio('AlignItems', 'Items Start'))
fieldsetAlignItems.appendChild(createRadio('AlignItems', 'Items End'))
fieldsetAlignItems.appendChild(createRadio('AlignItems', 'Items Baseline'))
fieldsetAlignItems.appendChild(createRadio('AlignItems', 'Items Stretch'))
fieldsetAlignItems.appendChild(createRadio('AlignItems', 'Not Set'))
controlsWrapper.appendChild(fieldsetAlignItems)

const fieldsetWrap = document.createElement('FIELDSET')
fieldsetWrap.classList.add('mt-6', 'mr-6')
const legendWrap = document.createElement('LEGEND')
legendWrap.classList.add('text-base', 'font-medium', 'text-gray-500')
legendWrap.textContent = 'Flex Wrap'
fieldsetWrap.appendChild(legendWrap)
fieldsetWrap.appendChild(createRadio('Wrap', 'Flex Wrap'))
fieldsetWrap.appendChild(createRadio('Wrap', 'Flex Wrap Reverse'))
fieldsetWrap.appendChild(createRadio('Wrap', 'Flex Nowrap'))
fieldsetWrap.appendChild(createRadio('Wrap', 'Not Set', true))
controlsWrapper.appendChild(fieldsetWrap)

app.appendChild(controlsWrapper)

function createBoxElement(id){
  const box = document.createElement('DIV')
  box.setAttribute('id', `box-${id}`)
  box.classList.add(
    listOfBackgroundColors[Math.floor(Math.random() * listOfBackgroundColors.length)], 
    listOfWidths[Math.floor(Math.random() * listOfWidths.length)],
    listOfHights[Math.floor(Math.random() * listOfHights.length)],
    'flex', 'text-white', 'text-4xl', 'font-extrabold', 'items-center', 'justify-center', 'flex-grow-0', 'flex-shrink-0')
  box.innerHTML = id
  nextBox++
  
  return box
}

function createButton(name, onclick){
  const button = document.createElement('BUTTON')
  button.setAttribute('onclick', onclick)
  button.setAttribute('id', name.replace(' ', '-').toLowerCase())
  button.classList.add('px-2.5', 'py-1.5', 'mx-1', 'border', 'border-transparent', 'text-xs', 'font-medium',  'rounded', 'shadow-sm', 'text-white', 'bg-indigo-600', 'hover:bg-indigo-700', 'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-indigo-500')
  button.textContent = name
  
  return button
}

function createRadio(name, value, checked = false){
  const div = document.createElement('DIV')
  div.classList.add('flex', 'items-center')
  const radio = document.createElement('INPUT')
  radio.setAttribute('type', 'radio')
  radio.setAttribute('name', name)
  radio.setAttribute('value', value.replaceAll(' ', '-').toLowerCase())
  radio.setAttribute('id', value.replace(' ', '-').toLowerCase())
  radio.setAttribute('onclick', 'radioHandler(this)')
  radio.classList.add('focus:ring-indigo-500', 'h-4', 'w-5', 'text-indigo-600', 'border-gray-300')
  radio.checked = checked
  div.appendChild(radio)
  const label = document.createElement('LABEL')
  label.classList.add('block', 'text-sm', 'font-medium', 'pl-3', 'text-gray-400')
  label.setAttribute('for', name.replace(' ', '-').toLowerCase())
  label.textContent = value
  div.appendChild(label)
  
  return div
}

function addBox(){
  boxToMove = document.getElementById(`box-${nextBox-1}`)
  playground.appendChild(boxToMove)
  playgroundBoxesArray.push(nextBox-1)
  newBoxContainer.prepend(createBoxElement(nextBox))
  enableDeleteButtons()
}

function deleteLastBox(){
  boxToMove = document.getElementById(`box-${playgroundBoxesArray.pop()}`)
  boxToMove.remove()
  if (playgroundBoxesArray.length == 0) disableDeleteButtons()
}

function deleteAllBoxes(){
  playground.innerHTML = ''
  disableDeleteButtons()
  playgroundBoxesArray = []
}

function disableDeleteButtons(){
  deleteLast = document.getElementById('delete-last')
  deleteLast.classList.add('opacity-50', 'cursor-not-allowed')
  deleteLast.disabled = true
  deleteAll = document.getElementById('delete-all')
  deleteAll.classList.add('opacity-50', 'cursor-not-allowed')
  deleteAll.disabled = true
}

function enableDeleteButtons(){
  deleteLast = document.getElementById('delete-last')
  deleteLast.classList.remove('opacity-50', 'cursor-not-allowed')
  deleteLast.disabled = false
  deleteAll = document.getElementById('delete-all')
  deleteAll.classList.remove('opacity-50', 'cursor-not-allowed')
  deleteAll.disabled = false
}

function radioHandler(radio){
  switch(radio.name){
    case 'Direction':
      playground.classList.remove('flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse')
      if (radio.value == 'not-set') break
      playground.classList.add(radio.value)
      break
    case 'AlignDirection':
      playground.classList.remove('justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly')
      if (radio.value == 'not-set') break
      playground.classList.add(radio.value)
      break
    case 'Wrap':
      playground.classList.remove('flex-wrap', 'flex-wrap-reverse', 'flex-nowrap')
      if (radio.value == 'not-set') break
      playground.classList.add(radio.value)
      break
    case 'AlignItems':
      playground.classList.remove('items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch')
      if (radio.value == 'not-set') break
      playground.classList.add(radio.value)
      break
  }
  updateClassListDiv()
}

function updateClassListDiv(){
  classListDiv.innerHTML = 'Playground classes: ' + playground.classList.toString().replaceAll('w-8/12', '').replaceAll('overflow-hidden', '')
}
function logClasses(){
  // console log all tailwindcss class names used in this document.
  let classList = ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse', 'justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly', 'flex-wrap', 'flex-wrap-reverse', 'flex-nowrap', 'items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch', 'bg-blue-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-red-500', 'bg-gray-400', 'bg-pink-400', 'px-6', 'px-8', 'px-10', 'px-12', 'py-8', 'py-12', 'py-16', 'py-24']
  document.querySelectorAll('*').forEach((element) => {
    element.classList.forEach((className) => {
      if (!classList.includes(className)) classList.push(className)
    })
  })
  console.log(classList.sort().join('\n'))
}

function runTheApp() {
  document.getElementById('wrapper').appendChild(app)
}

document.addEventListener('DOMContentLoaded', runTheApp, false)

