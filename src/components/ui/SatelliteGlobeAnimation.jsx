import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GLOBE_RADIUS = 1.75;
const GLOBE_POINT_COUNT = 700;
const GLOBE_ROTATION_SPEED = 0.1;
const GLOBE_DOT_SIZE = 2.4;
const GLOBE_FRONT_BRIGHTNESS = 0.05;
const GLOBE_BACK_BRIGHTNESS = 0.95;
const VIEW_EXTENT = 2.0;

// Even coverage of a sphere's surface via the golden-angle (Fibonacci) spiral.
function fibonacciSpherePositions(count, radius) {
  const positions = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const ringRadius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    positions[i * 3] = Math.cos(theta) * ringRadius * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * ringRadius * radius;
  }
  return positions;
}

function Globe() {
  const pointsRef = useRef();
  const thetaRef = useRef(0);
  const basePositions = useMemo(
    () => fibonacciSpherePositions(GLOBE_POINT_COUNT, GLOBE_RADIUS),
    []
  );
  const colors = useMemo(() => new Float32Array(GLOBE_POINT_COUNT * 3), []);

  useFrame((_, delta) => {
    thetaRef.current += delta * GLOBE_ROTATION_SPEED;
    const cosT = Math.cos(thetaRef.current);
    const sinT = Math.sin(thetaRef.current);

    for (let i = 0; i < GLOBE_POINT_COUNT; i++) {
      const x = basePositions[i * 3];
      const z = basePositions[i * 3 + 2];
      const rotatedZ = -x * sinT + z * cosT;
      const facing = rotatedZ / GLOBE_RADIUS;
      const brightness = THREE.MathUtils.mapLinear(
        facing,
        -1,
        1,
        GLOBE_BACK_BRIGHTNESS,
        GLOBE_FRONT_BRIGHTNESS
      );
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = thetaRef.current;
      pointsRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={GLOBE_POINT_COUNT} array={basePositions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={GLOBE_POINT_COUNT} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={GLOBE_DOT_SIZE} sizeAttenuation={false} />
    </points>
  );
}

const SatelliteGlobeAnimation = () => {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 1.4, 6],
        left: -VIEW_EXTENT,
        right: VIEW_EXTENT,
        top: VIEW_EXTENT,
        bottom: -VIEW_EXTENT,
        near: 0.1,
        far: 20,
      }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Globe />
    </Canvas>
  );
};

export default SatelliteGlobeAnimation;
