import React, { Suspense, lazy } from "react";

const LoadingPlaceholder = () => <div>Loading...</div>;

// Define LazyComponent separately from lazy loading
const LazyComponent = () => {
  return (
    <div>
      <h2>This is the Lazy Component</h2>
      <p>This component is being lazy-loaded.</p>
    </div>
  );
};

// Lazily load the LazyComponent
const LazyLoadedComponent = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ default: LazyComponent }), 10000); // Simulating delay
  });
});

const MyLazyLoadingComponent = () => {
  return (
    <div>
      <h1>My Lazy Loading Component</h1>
      <Suspense fallback={<LoadingPlaceholder />}>
        {/* Use the lazily loaded component */}
        <LazyLoadedComponent />
      </Suspense>
    </div>
  );
};

export default MyLazyLoadingComponent;
