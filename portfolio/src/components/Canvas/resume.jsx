import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ResumeModel = () => {
    const resumeModel = useGLTF('./Shwetank_Dohroo_Resume.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={5} />
            <directionalLight position={[5, 0, 5]} intensity={10} castShadow shadow-mapSize={1024} />
            <primitive 
                object={resumeModel.scene} 
                scale={0.75} 
                position={[0, 0,0]} 
                rotation={[Math.PI, 0.2, -1.6]} 
            />
        </mesh>
    );
};

const ShwetankResumeCanvas = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center border-2 border-dashed bg-slate-700 rounded-2xl">
            <Canvas frameloop="demand" shadows camera={{ position: [20, 0, 4], fov: 45}} gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={true} enableRotate={false} minDistance={15} maxDistance={20} />
                    <ResumeModel />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default ShwetankResumeCanvas;
