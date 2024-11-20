import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Mongomodel = () => {
    const mongoModel = useGLTF('./mongo.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={0.35} groundColor="black" />
            <directionalLight 
                position={[5, 5, 5]} 
                intensity={10} 
                castShadow 
                shadow-mapSize={1024} 
            />
            <spotLight 
                intensity={3} 
                position={[0, 10, 0]} 
                angle={0.3} 
                penumbra={1} 
                castShadow 
            />
            <primitive 
                object={mongoModel.scene} 
                scale={0.6} 
                position={[0, -1, 0]} 
                rotation={[0, Math.PI / 2, 0]} 
            />
        </mesh>
    );
};

const MongoCanvas = () => {
    return (
        <div className="w-full h-96 flex justify-center items-center rounded-2xl">
            <Canvas 
                frameloop="demand" 
                shadows 
                camera={{ position: [0, 0, 0], fov: 120 }} 
                gl={{ preserveDrawingBuffer: true }}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} enableRotate={true} minDistance={5} maxDistance={10} maxPolarAngle={Math.PI / 2}/>
                    <Mongomodel />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default MongoCanvas;
