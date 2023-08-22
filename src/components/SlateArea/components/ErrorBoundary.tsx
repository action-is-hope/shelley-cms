import React from "react";

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <p style={{ color: "red" }}>
          The rich text field has crashed. Please try reloading the page.
        </p>
      );
    }

    return this.props.children;
  }
}
