import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Loader, Text3D } from "@react-three/drei"
import { Suspense, useState } from "react"
import { Model } from "./whitepirate"
import * as THREE from 'three'
import { Spinner, Center, Box, Button } from "@chakra-ui/react"

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 1.5 + state.mouse.x / 8, 0.075)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + state.mouse.y / 8, 0.075)
  })
}

//bgGradient={'linear(to-br, blue.100, green.100, gray.200)'}
export const Character = () => {
  const [reset, setReset ] = useState(false)
  return(
    <Box style={{position:'absolute', height:'100vh', width:'100vw', display:'block', top:0, right:0}} >
      <Canvas className="Canvas" 
        camera={{position:[1.9,1,4.5], fov:50}}
        gl={{ antialias: true }} onCreated={state => state.gl.setClearColor( 0xffffff, 0)}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]}/>
          <Model reset={reset}/>
        </Suspense>
        <Rig />
      </Canvas>
      <Loader />
    </Box>
)}