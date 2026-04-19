import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  shapes?: Array<{
    type: 'box' | 'sphere' | 'octahedron' | 'torus';
    position: [number, number, number];
    color: string;
    speed: number;
  }>;
  explode?: boolean;
}

export const Scene3D = ({ shapes = [], explode = false }: Scene3DProps) => {
  const containerRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number>();
  const visibleRef = useRef(true);
  const explodeRef = useRef(explode);

  useEffect(() => {
    explodeRef.current = explode;
  }, [explode]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: containerRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2)); // Reduced to fix lag
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const colors = shapes.map(s => s.color);
    const getCol = (i: number) => colors[i % colors.length] || '#38bdf8';

    // Central Core (Solid Low-Poly Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(0.6, 0);
    const coreMat = new THREE.MeshLambertMaterial({
      color: getCol(0),
      flatShading: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    
    // Outer wireframe shell
    const shellGeo = new THREE.IcosahedronGeometry(0.8, 1);
    const shellMat = new THREE.MeshBasicMaterial({
      color: getCol(1),
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    coreMesh.add(shellMesh);
    
    coreMesh.userData.isCore = true;
    coreMesh.userData.explodeVelocity = new THREE.Vector3(0, 0, 0.4);
    scene.add(coreMesh);
    meshesRef.current.push(coreMesh);

    // Orbiting Rings
    for (let i = 1; i <= 3; i++) {
      const ringGeo = new THREE.TorusGeometry(1 + i * 0.5, 0.015, 8, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: getCol(i + 1),
        transparent: true,
        opacity: 0.5
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      
      ringMesh.rotation.x = Math.random() * Math.PI;
      ringMesh.rotation.y = Math.random() * Math.PI;
      
      ringMesh.userData.rotSpeedX = (Math.random() - 0.5) * 0.015;
      ringMesh.userData.rotSpeedY = (Math.random() - 0.5) * 0.015;
      ringMesh.userData.explodeVelocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.6,
        Math.random() * 0.4 + 0.2
      );
      
      scene.add(ringMesh);
      meshesRef.current.push(ringMesh);
    }

    const particleCount = 150; // Keep performance high
    const posArray = new Float32Array(particleCount * 3);
    for(let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const animate = (time: number) => {
      frameIdRef.current = requestAnimationFrame(animate);
      if (!visibleRef.current) return;
      
      if (explodeRef.current) {
        meshesRef.current.forEach(mesh => {
          if (mesh.userData.isCore) {
            mesh.scale.setScalar(mesh.scale.x + 0.1); // Core expands rapidly
            mesh.rotation.y += 0.05;
          } else {
            mesh.rotation.x += mesh.userData.rotSpeedX * 5;
            mesh.rotation.y += mesh.userData.rotSpeedY * 5;
            mesh.position.add(mesh.userData.explodeVelocity);
          }
        });
        
        if (particlesRef.current) {
          particlesRef.current.rotation.y -= 0.02;
          particlesRef.current.position.z += 0.15;
        }
      } else {
        meshesRef.current.forEach((mesh, idx) => {
          if (mesh.userData.isCore) {
            mesh.rotation.y += 0.005;
            mesh.rotation.x += 0.002;
            mesh.position.y = Math.sin(time * 0.001) * 0.1;
          } else {
            mesh.rotation.x += mesh.userData.rotSpeedX;
            mesh.rotation.y += mesh.userData.rotSpeedY;
            // Rings float gently
            mesh.position.y = Math.sin(time * 0.0005 + idx) * 0.1;
          }
        });

        if (particlesRef.current) {
          particlesRef.current.rotation.y -= 0.0005;
          particlesRef.current.rotation.x -= 0.0002;
        }
      }

      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(scene, camera);
      }
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      meshesRef.current.forEach(mesh => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [shapes]);

  return <canvas ref={containerRef} className="w-full h-full pointer-events-none" />;
};
