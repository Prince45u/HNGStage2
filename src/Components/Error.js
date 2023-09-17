import React from "react";
import { stopReportingRuntimeErrors } from "react-error-overlay";

class ErrorBoundary extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to a server or send an email notification
    // console.error(error, errorInfo);
  }


  render() {
    if (this.state.hasError) {
      return (<div className="-background">
        <div className="-content">
          <h1 className="-text">ERROR</h1>
          <p className="-p">Something went wrong</p>
        </div>
      </div>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
