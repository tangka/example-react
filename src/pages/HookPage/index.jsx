import React, { Suspense } from 'react';
import Context from './useContext';
import Animation from './useAnimtion';

const OtherComponent = React.lazy(() => import('./suspense'));

export default function HookPage() {
  return (
      <div>
        <Context />
        <Animation />
        <Animation />
        <Animation />
        <Animation />
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
        <Animation />
        <Animation />
        <Animation />
        <Animation />
        <Animation />
        <Animation />
      </div>)
}