import bcryptjs from 'bcryptjs'

const user = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'client',
    email: 'client@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
]

export default user
