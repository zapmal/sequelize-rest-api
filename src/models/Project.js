import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/database';
import Task from './Task';

const Project = sequelize.define('project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
  },
  priority: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT,
  },
  delivery_date: {
    type: DataTypes.DATE,
  },
}, { timestamps: false });

Project.hasMany(Task, { foreignKey: 'project_id', sourceKey: 'id' });
Task.belongsTo(Project, { foreignKey: 'project_id', sourceKey: 'id'});

export default Project;