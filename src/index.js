import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import dotenv from 'dotenv';

import 'semantic-ui-css/semantic.min.css';
dotenv.config();

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
