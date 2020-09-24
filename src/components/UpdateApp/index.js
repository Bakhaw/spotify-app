import React, { Component } from 'react';
import SnackBar from './SnackBar';

class UpdateApp extends Component {
  state = {
    hasUpdate: undefined
  };

  componentDidMount() {
    if (window.swObservable) {
      window.swObservable.subscribe(hasUpdate => this.setState({ hasUpdate }));
    }
  }

  render() {
    const { hasUpdate } = this.state;
    const message = hasUpdate
      ? 'A new update is available, please quit and restart the application'
      : 'The application is now cached and ready to use offline';

    return (
      <React.Fragment>
        {hasUpdate !== undefined && <SnackBar message={message} />}
      </React.Fragment>
    );
  }
}

export default UpdateApp;
