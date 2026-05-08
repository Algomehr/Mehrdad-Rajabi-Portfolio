import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const DataNodes = () => {
  const group = useRef<THREE.Group>(null);
  const { mouse, viewport, camera } = useThree();

  // Create random nodes
  const nodes = useMemo(() => {
    return Array.from({ length: 60 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15 - 5
      ] as [number, number, number],
      scale: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.5 ? "#3b82f6" : "#818cf8"
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001;
      group.current.rotation.x += 0.0005;
      
      // Calculate scroll based on document scroll
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Parallax effect on mouse movement and scroll
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10 + scrollProgress * 15;
      
      group.current.position.x += (targetX - group.current.position.x) * 0.05;
      group.current.position.y += (targetY - group.current.position.y) * 0.05;

      // Camera dynamic zoom based on scroll
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 10 - scrollProgress * 5, 0.05);
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
           <mesh position={node.position} scale={node.scale}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color={node.color} wireframe opacity={0.6} transparent />
           </mesh>
        </Float>
      ))}
      {/* Central AI Brain/Core */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[2, 1]} />
        <MeshDistortMaterial
          color="#1e3a8a"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
          wireframe
        />
      </mesh>
    </group>
  );
};

export const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#818cf8" />
        <rectAreaLight position={[0, 0, 5]} width={10} height={10} intensity={2} color="#4ade80" />
        
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={1} fade speed={1.5} />
        
        <DataNodes />

        {/* Large background distortion for depth */}
        <mesh position={[0, 0, -30]} scale={1.5}>
            <sphereGeometry args={[20, 64, 64]} />
            <MeshDistortMaterial color="#0f172a" distort={0.6} speed={1} wireframe opacity={0.05} transparent />
        </mesh>
      </Canvas>
    </div>
  );
};
