import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Mattheus' },
    { id: 2, name: 'Diego' },
    { id: 3, name: 'Rafael' },

  ]
  return response.json(users);
}