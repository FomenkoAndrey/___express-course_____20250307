// users
export const getUsersHandler = (req, res) => {
  res.end('Get Users Route')
}

export const postUsersHandler = (req, res) => {
  res.end('Post Users Route')
}

// users/:userId
export const getUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.end(`Get User by ID Route: ${userId}`)
}

export const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.end(`Delete User by ID Route: ${userId}`)
}

export const putUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.end(`Put User by ID Route: ${userId}`)
} 
