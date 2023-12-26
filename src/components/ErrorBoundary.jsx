import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Error from "../routes/Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez également enregistrer l'erreur dans un service de journalisation
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // go to the error page
      <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
