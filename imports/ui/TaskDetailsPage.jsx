import React, { PropTypes } from 'react';

import { Page, Toolbar, BackButton } from 'react-onsenui';

const TaskDetailsPage = ({task, navigator}) => {
  const renderToolbar = () => {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton onClick={() => navigator.popPage()}>
            <span className="back-button__label">Todos</span>
          </BackButton>
        </div>
        <div className="center">Task Details</div>
      </Toolbar>
    );
  };

  return (
    <Page
      renderToolbar={renderToolbar}
    >
      <div style={{margin: '20px auto', display: 'table'}}>
        {task.text}
      </div>
    </Page>
  );
};

TaskDetailsPage.propTypes = {
  task: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
};

export default TaskDetailsPage;
