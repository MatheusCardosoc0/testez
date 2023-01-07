import { create, deleteId, get, getId, updatedId } from '../controllers/user.controller'

const userRoutes = app => {
  app.post('/user', create)
  app.get("/user", get)
  app.get("/user/:id", getId)
  app.put("/user/:id", updatedId)
  app.delete("/user/:id", deleteId)
}

export default userRoutes
