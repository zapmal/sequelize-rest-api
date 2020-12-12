import { Router } from 'express';
import {
  createTask,
  getAllTasks,
  getTask,
  getTasksByProject,
  updateTask,
  deleteTask,
} from '../controllers/taskController';

const router = Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTask);
router.get('/project/:id', getTasksByProject);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;