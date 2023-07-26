import React, { Suspense } from 'react'
import Cat from './Cat.jsx';
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Stage } from '@react-three/drei';

const ThreeCat = () => {
  return (
    <Canvas
        linear
        flat
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        >
        <PerspectiveCamera makeDefault position={[0, 0, 1]} zoom={0.68} />
        <Stage preset="rembrandt" environment={"city"} intensity={0.4}>
            <ambientLight intensity={0.6} />
            <Cat />
        </Stage>
        <OrbitControls enableZoom = {false}/>
    </Canvas>
  )
}

export default ThreeCat