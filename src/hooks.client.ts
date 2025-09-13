import type { ClientInit } from '@sveltejs/kit'
import { canvasProtection } from '$lib/utils'

export const init: ClientInit = () => {
  canvasProtection()
}