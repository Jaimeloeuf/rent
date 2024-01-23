import { StrictMode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import './App.css';

import { Loading } from './components';
import { router } from './router';

function GlobalError() {
  return <div>Something went wrong</div>;
}

export function App() {
  return (
    <StrictMode>
      <ErrorBoundary fallback={<GlobalError />}>
        <Suspense fallback={<Loading />}>
          <div className="p-4 sm:p-6">
            <RouterProvider router={router} />
          </div>
        </Suspense>
      </ErrorBoundary>
    </StrictMode>
  );
}
