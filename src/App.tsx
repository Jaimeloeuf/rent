import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Loading } from './components/Loading';
import { router } from './router';

export function App() {
  return (
    <div className="p-4 sm:p-6">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}
