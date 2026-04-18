import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  shapes?: Array<{
    type: 'box' | 'sphere' | 'octahedron' | 'torus';
    position: [number, number, number];
    color: string;
    speed: number;
  }>;
}

export const Scene3D = ({ shapes = [] }: Scene3DProps) => {
  const containerRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const frameIdRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: containerRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight1.position.set(10, 10, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-10, -10, -5);
    scene.add(directionalLight2);

    // Create shapes
    shapes.forEach(shape => {
      let geometry;
      switch (shape.type) {
        case 'sphere':
          geometry = new THREE.SphereGeometry(0.5, 32, 32);
          break;
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(0.5);
          break;
        case 'torus':
          geometry = new THREE.TorusGeometry(0.4, 0.15, 16, 100);
          break;
        default:
          geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
      }

      const material = new THREE.MeshStandardMaterial({
        color: shape.color,
        metalness: 0.6,
        roughness: 0.2
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...shape.position);
      mesh.userData.speed = shape.speed;
      mesh.userData.initialY = shape.position[1];
      scene.add(mesh);
      meshesRef.current.push(mesh);
    });

    // Animation
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      meshesRef.current.forEach(mesh => {
        mesh.rotation.x += 0.005 * mesh.userData.speed;
        mesh.rotation.y += 0.003 * mesh.userData.speed;
        mesh.position.y = mesh.userData.initialY + Math.sin(Date.now() * 0.001 * mesh.userData.speed) * 0.2;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      meshesRef.current.forEach(mesh => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [shapes]);

  return <canvas ref={containerRef} className="w-full h-full" />;
};
