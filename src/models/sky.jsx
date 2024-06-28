/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, deltaX) => {
        if(isRotating) {
            skyRef.current.rotation.y += 0.25 * deltaX;
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default sky