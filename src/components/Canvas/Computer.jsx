import { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Computers = ({ isMobile, isTablet }) => {
    const computer = useGLTF('./gaming_desktop_pc/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={10} />
            <directionalLight position={[5, 10, 5]} intensity={5} castShadow shadow-mapSize={1024} />
            <primitive 
                object={computer.scene} scale={isMobile ? 0.4 : isTablet ? 0.6 : 0.6} position={isMobile ? [0, -2, -0.7] : isTablet ? [0, -2.1, -1] : [0, -2.25, -1.5]} rotation={[-0.01, -0.2, -0.3]} />
        </mesh>
    );
};

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 700);
            setIsTablet(width > 500 && width <= 1000);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Computers isMobile={isMobile} isTablet={isTablet} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputerCanvas;
