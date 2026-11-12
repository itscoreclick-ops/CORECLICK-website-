import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in CoreClick React Application:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF9F6] text-[#111321] px-4 py-12">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FFE5ED] border border-[#FF087F]/30 text-[#FF087F] flex items-center justify-center mx-auto text-2xl font-bold">
              ⚡
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-[#111321] tracking-tight">
              Something Unexpected Happened
            </h2>
            <p className="text-xs sm:text-sm text-[#727383] leading-relaxed">
              CoreClick encountered a temporary rendering issue. Please reload the page to refresh your connection.
            </p>
            <div className="pt-2">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3.5 rounded-full bg-[#111321] text-white font-extrabold text-xs hover:bg-black transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <span>Reload Application</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
