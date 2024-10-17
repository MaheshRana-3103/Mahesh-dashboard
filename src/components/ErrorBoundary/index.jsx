import React, { Component } from "react";
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="Error-container">
          <h2 className="semibold-14 w-600" style={{ padding: 8 }}>
            Something went wrong...
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
