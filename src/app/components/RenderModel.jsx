'use client';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import React, { Suspense } from 'react';

const RenderModel = ({ children, className, preset }) => {
  return (
    <div>
      <div className={clsx('w-screen h-screen -z-10 relative', className)}>
        <Canvas>
          <Suspense fallback={null}>{children}</Suspense>
          <Environment preset={preset} />
        </Canvas>
      </div>
    </div>
  );
};

export default RenderModel;
