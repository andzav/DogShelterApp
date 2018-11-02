import React from 'react';
import PropTypes from 'prop-types';

class DeviceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: false };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerHeight > window.innerWidth) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        { this.props.render(this.state.isMobile) }
      </React.Fragment>
    );
  }
}

DeviceInfo.propTypes = {
  render: PropTypes.func.isRequired,
};

export default DeviceInfo;
