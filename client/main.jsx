import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  ons.ready(() => {
    render(<App />, document.getElementById('render-target'));
  });
});
