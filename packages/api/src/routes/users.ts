import express from 'express';

const router = express.Router();

interface User {
  firstName: string;
  lastName: string;
}

export type UsersResult = User[];
router.get('/users', (req, res) => {
  const users: UsersResult = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
  ];

  res.send(users);
});

export default router;
