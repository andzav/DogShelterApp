import React from 'react';

class DeviceInfo extends React.Component{
    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0, isMobile: false};
    }
    
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      if (window.innerHeight > window.innerWidth){
        this.setState({isMobile: true});
      }else{
        this.setState({isMobile: false});
      }
    }

    render(){
      return (
        <>
          {this.props.render(this.state)}
        </>
      )
    }
}

export default DeviceInfo;