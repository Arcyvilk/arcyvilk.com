import Draggable from 'gsap/Draggable'

type DraggableProps = Draggable.Vars & { elementId: string }
export const enableDragging = ({ elementId, ...options }: DraggableProps) => {
  const elementIdSelector = `#${elementId}`

  const draggableOptions: Draggable.Vars = {
    allowEventDefault: true,
    dragClickables: true,
    force3D: false,
    ...options
  }

  Draggable.create(elementIdSelector, draggableOptions)
}