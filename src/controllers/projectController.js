import Project from '../models/Project';

const createProject = async (request, response) => {
  const {
    name,
    priority,
    description,
    delivery_date,
  } = request.body;

  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
      delivery_date
    }, {
      fields: ['name', 'priority', 'description', 'delivery_date']
    });

    return response.json({
      message: 'Project created.',
      project: newProject
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

const getAllProjects = async (request, response) => {
  try {
    const projects = await Project.findAll();

    if (!projects) {
      return response
        .status(404)
        .json({
        message: 'Not Found.'
      });
    }

    return response.json(projects);

  } catch (error) {

    return response
      .status(500)
      .json({
        message: 'Something went wrong on our side.'
      });
  }
};

const getProject = async (request, response) => {
  const {
    id
  } = request.params;

  try {
    const project = await Project.findOne({
      where: {
        id
      }
    });

    if (!project) {
      return response
        .status(404)
        .json({
        message: 'Not Found.'
      });
    }

    return response.json({ project });

  } catch (error) {

    return response
      .status(404)
      .json({
        message: 'Something went wrong on our side.'
      });
  }
};

const deleteProject = async (request, response) => {
  const { id } = request.params;

  try {
    const project = await Project.findOne({ where: { id }});

    if (!project) {
      return response
        .status(404)
        .json({
        message: 'Such project does not exist in our records..'
      });
    }

    await project.destroy();

    return response.json({ message: 'Deleted successfully.'});

  } catch (error) {
    return response
      .status(500)
      .json({
        message: 'Something went wrong on our side.'
      });
  }
};

const updateProject = async (request, response) => {
  const { id } = request.params;
  const { 
    name, 
    description, 
    priority, 
    delivery_date 
  } = request.body;

  try {
    const project = await Project.findOne({ where: { id }});
    
    if (!project) {
      return response
        .status(404)
        .json({
        message: 'Such project does not exist in our records..'
      });
    }

    const updatedProject = await project.update({ 
      name,
      description,
      priority,
      delivery_date
    });

    return response.json({ project: updatedProject });

  } catch (error) {
    return response
      .status(500)
      .json({
        message: 'Something went wrong on our side.'
      })
  }
};

export {
  createProject,
  getAllProjects,
  getProject,
  deleteProject,
  updateProject,
}