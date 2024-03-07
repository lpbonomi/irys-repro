import { getIrysInstance } from 'blockchain-helper'

export default function Component() {
  getIrysInstance()
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      Hello world
    </main>
  )
}
