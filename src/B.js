import React from "react";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.B();
  }

//   componentDidUpdate(prevProps) {
//     if (this.props.outputName !== prevProps.outputName) {
//       this.generateTitle();
//     }
//  }

  B() {
    
  }                
  
  render(){
      return <div ref={this.myRef}></div>;
          }
    
    }
export default Title;

