import { Suspense } from 'react';
import { Home } from './Home';
import { Loading } from './components/Loading';

export function App() {
  return (
    <div className="p-4 sm:p-6">
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </div>
  );
}
