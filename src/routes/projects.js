import { Router } from 'express';
import { 
  createProject, 
  getAllProjects,
  getProject,
  deleteProject,
  updateProject
} from '../controllers/projectController';

const router = Router();

router.post('/', createProject);
router.get('/', getAllProjects);
router.get('/:id', getProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

export default router;