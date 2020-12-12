import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/database';

const Task = sequelize.define('task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
  project_id: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

export default Task;