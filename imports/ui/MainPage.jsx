import React, { PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';

import ons from 'onsenui';
import { Page, Toolbar, Input, Fab, Icon, ToolbarButton } from 'react-onsenui';
import TaskList from './TaskList.jsx';

const MainPage = ({navigator}) => {
  const handleNewTaskClick = () => {
    ons.notification.prompt({
      title: 'New Task',
      message: 'Include a task title.',
      placeholder: 'I want to...',
      cancelable: true,
      buttonLabel: 'Save Task'
    })
    .then(saveTask);
  };

  const saveTask = inputValue => {
    const text = inputValue.trim();

    if (text) {
      Tasks.insert({
        text,
        createdAt: new Date()
      });

    } else {
      ons.notification.alert('You must provide a task title!')
    }
  };

  const renderToolbar = () => {
    return (
      <Toolbar>
        <div className="center">Todos</div>
        <div className="right">
          {ons.platform.isAndroid() ? null : 
          (<ToolbarButton onClick={handleNewTaskClick}>
            New
          </ToolbarButton>)
          }
        </div>
      </Toolbar>
    );
  };

  const renderFixed = () => {
    return ons.platform.isAndroid() ? (
      <Fab
        onClick={handleNewTaskClick}
        position='bottom right'
      >
        <Icon
          icon='md-edit'
        />
      </Fab>
    )
    : null;
  };

  return (
    <Page 
      renderToolbar={renderToolbar}
      renderFixed={renderFixed}
    >
      <TaskList navigator={navigator}/>
    </Page>
  );
};

MainPage.propTypes = {
  navigator: PropTypes.object
};

export default MainPage;
