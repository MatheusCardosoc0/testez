import { prisma } from "../services/prisma"


export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      telefone: true,
      createAt: true,
      updateAt: true,
    }
  })
  return user
}

export const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      telefone: true,
    }
  })
  return users
}

export const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    }
  })

  return user
}