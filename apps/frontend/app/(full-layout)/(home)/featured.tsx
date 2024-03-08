import { prisma } from 'database'

export async function Featured() {
  await prisma.collection.findMany()

  return (
    <div>test</div>
  )
}
