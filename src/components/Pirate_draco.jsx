/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/pirate_draco.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 5.21, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.27}>
        <primitive object={nodes.Hips} />
        <skinnedMesh geometry={nodes.Beard.geometry} material={materials.Beard_Material} skeleton={nodes.Beard.skeleton} />
        <skinnedMesh geometry={nodes.Belt.geometry} material={materials.lambert2SG} skeleton={nodes.Belt.skeleton} />
        <skinnedMesh geometry={nodes.Belt_2.geometry} material={materials.Pirate_Material} skeleton={nodes.Belt_2.skeleton} />
        <skinnedMesh geometry={nodes.Cutlass.geometry} material={materials.Material} skeleton={nodes.Cutlass.skeleton} />
        <skinnedMesh geometry={nodes.Eye_L.geometry} material={materials.lambert2SG} skeleton={nodes.Eye_L.skeleton} />
        <skinnedMesh geometry={nodes.Eye_R.geometry} material={materials.lambert2SG} skeleton={nodes.Eye_R.skeleton} />
        <skinnedMesh geometry={nodes.Hat.geometry} material={materials.lambert2SG} skeleton={nodes.Hat.skeleton} />
        <skinnedMesh geometry={nodes.Pirate.geometry} material={materials.Material} skeleton={nodes.Pirate.skeleton} />
        <skinnedMesh geometry={nodes.Pistol_1.geometry} material={materials.lambert2SG} skeleton={nodes.Pistol_1.skeleton} />
        <skinnedMesh geometry={nodes.Pistol_2.geometry} material={materials.lambert2SG} skeleton={nodes.Pistol_2.skeleton} />
        <skinnedMesh geometry={nodes.Sword_Scabbard.geometry} material={materials.lambert2SG} skeleton={nodes.Sword_Scabbard.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/pirate_draco.gltf')
