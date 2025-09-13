import Draggable from 'gsap/Draggable'

type DraggingProps = Draggable.Vars & {
  element: string;
}

export const enableDragging = ({ element, ...options }: DraggingProps) => {
  const draggableOptions: Draggable.Vars = {
    allowEventDefault: true,
    dragClickables: true,
    ...options
  }

  Draggable.create(element, draggableOptions)
}