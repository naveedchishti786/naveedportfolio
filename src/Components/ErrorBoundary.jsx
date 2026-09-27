import { Component } from "react";
import { FaExclamationTriangle, FaRedo, FaHome } from "react-icons/fa";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    if (import.meta.env.MODE === "development") {
      console.error("Error Boundary caught an error:", error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 
                            bg-red-500/5 rounded-full blur-3xl"
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 
                            bg-orange-500/5 rounded-full blur-3xl"
            />
          </div>

          <div className="relative max-w-lg w-full text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div
                className="inline-flex items-center justify-center w-24 h-24 
                              bg-red-500/10 border border-red-500/20 rounded-full"
              >
                <FaExclamationTriangle className="text-red-500 text-4xl" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We apologize for the inconvenience. An unexpected error has
              occurred. Please try refreshing the page or go back to the home
              page.
            </p>

            {/* Error Details (Development Only) */}
            {import.meta.env.MODE === "development" && this.state.error && (
              <div
                className="mb-8 p-4 bg-red-500/10 border border-red-500/20 
                              rounded-xl text-left overflow-auto max-h-48"
              >
                <p className="text-red-400 text-sm font-mono">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-red-300/70 text-xs mt-2 whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={this.handleReload}
                className="flex items-center gap-2 px-6 py-3 
                           bg-gradient-to-r from-blue-500 to-cyan-400 
                           text-white font-semibold rounded-xl
                           hover:shadow-lg hover:shadow-blue-500/25 
                           hover:-translate-y-0.5 active:scale-95 
                           transition-all duration-300"
              >
                <FaRedo size={14} />
                Refresh Page
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center gap-2 px-6 py-3 
                           bg-white/5 border border-white/10 
                           text-white font-semibold rounded-xl
                           hover:bg-white/10 hover:border-white/20 
                           hover:-translate-y-0.5 active:scale-95 
                           transition-all duration-300"
              >
                <FaHome size={14} />
                Go Home
              </button>
            </div>

            {/* Contact Support */}
            <p className="mt-8 text-gray-500 text-sm">
              If the problem persists, please{" "}
              <a
                href="mailto:naveedchishti1997@gmail.com"
                className="text-blue-400 hover:underline"
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;