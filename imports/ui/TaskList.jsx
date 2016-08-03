import { createContainer } from 'meteor/react-meteor-data';
import React, { PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';

import { List, ListHeader } from 'react-onsenui';
import TaskDetailsPage from './TaskDetailsPage.jsx';
import Task from './Task.jsx';

const TaskList = ({tasks, incompleteCount, navigator}) => {
  const taskClickHandler = index => {
    navigator.pushPage({
      component: TaskDetailsPage,
      key: 'TASK_DETAILS_PAGE',
      task: tasks[index],
      props: {
        task: tasks[index]
      }
    });
  };

  const renderTask = (task, index) => {
    return (
      <Task key={task._id} onClick={() => taskClickHandler(index)} task={task} />
    );
  };

  return (
    <List
      dataSource={tasks}
      renderRow={renderTask}
      renderHeader={() => <ListHeader>{incompleteCount} pending tasks</ListHeader>}
    />
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  navigator: PropTypes.object
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count()
  };
}, TaskList);
