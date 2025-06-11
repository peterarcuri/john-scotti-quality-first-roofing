'use client';

import dynamic from 'next/dynamic';

// Dynamically import Map with SSR disabled
const MapComponent = dynamic(() => import('./Map'), { ssr: false });

export default function MapClientWrapper() {
  return <MapComponent />;
}
