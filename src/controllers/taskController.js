import Task from '../models/Task';
import Project from '../models/Project';

const createTask = async (request, response) => {
  const {
    name,
    done,
    project_id
  } = request.body;

  try {
    const project = await Project.findOne({ where: { id: project_id }});

    if (!project) {
      return response
        .status(404)
        .json({
        message: 'The provided ID does not match any of our records.'
      });
    }

    const newTask = await Task.create({
      name,
      done,
      project_id
    }, {
      fields: ['name', 'done', 'project_id']
    });

    return response.json({
      message: 'Task added!',
      task: newTask
    });

  } catch (error) {
    console.log(error);

    return response
      .status(500)
      .json({
        message: 'Something went wrong on our side.'
      });
  }
};

const getAllTasks = async (request, response) => {
  try {
    const tasks = await Task.findAll();

    if (!tasks) {
      return response
        .status(404)
        .json({
        message: 'Nothing found.'
      });
    }

    return response.json(tasks);

  } catch (error) {

    return response
      .status(500)
      .json({
        message: 'Something went wrong on our side.'
      });
  }
};

const getTask = async (request, response) => {
  const {
    id
  } = request.params;

  try {
    const task = await Task.findOne({
      where: {
        id
      }
    });

    if (!task) {
      return response
        .status(404)
        .json({
        message: 'Not Found.'
      });
    }

    return response.json({ task });

  } catch (error) {

    return response
      .status(404)
      .json({
        message: 'Something went wrong on our side.'
      });
  }
};

const getTasksByProject = async (request, response) => {
  const {
    id
  } = request.params;

  try {
    

  } catch (error) {

    return response
      .status(404)
      .json({
        message: 'Something went wrong on our side.'
      });
  }
};

const updateTask = async (request, response) => {
  const { id } = request.params;
  const { 
    name, 
    done, 
    project_id, 
  } = request.body;

  try {
    const task = await Task.findOne({ where: { id }});
    
    if (!task) {
      return response
        .status(404)
        .json({
        message: 'Such task does not exist in our records.'
      });
    }

    const project = await Project.findOne({ where: { id: project_id }});

    if (!project) {
      return response
        .status(404)
        .json({
        message: 'The provided ID does not match any of our records.'
      });
    }

    const updatedTask = await task.update({ 
      name,
      done,
      project_id,
    });

    return response.json({ task: updatedTask });

  } catch (error) {

    return response
      .status(500)
      .json({
        message: 'Something went wrong on our side.'
      })
  }
};

const deleteTask = async (request, response) => {
  const { id } = request.params;

  try {
    const task = await Task.findOne({ where: { id }});

    if (!task) {
      return response
        .status(404)
        .json({
        message: 'Such task does not exist in our records..'
      });
    }

    await task.destroy();

    return response.json({ message: 'Deleted successfully.'});

  } catch (error) {
    return response
      .status(500)
      .json({
        message: 'Something went wrong on our side.'
      });
  }
};

export {
  createTask,
  getAllTasks,
  getTask,
  getTasksByProject,
  updateTask,
  deleteTask,
}