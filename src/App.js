import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import {
  BackSide,
  CubeReflectionMapping,
  CubeRefractionMapping,
  DoubleSide,
  FrontSide,
  IcosahedronGeometry,
  Object3D,
  ObjectSpaceNormalMap,
  SphereGeometry,
  TangentSpaceNormalMap,
  TextureLoader,
  TubeGeometry,
  Vector3
} from "three";
import {
  Canvas,
  useFrame,
  CubeTextureProps,
  useLoader,
  Camera,
  useThree
} from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import spacebackground1 from "./images/spaceBackground.png";

import texture1 from "./images/texture1.png";

import { useRef } from "react";
//import Birds from "react-birds";
import BIRDS from "vanta/dist/vanta.birds.min";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function App() {
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(75, window.innerWidth, 0.1, 1000);
  var texture1_ = useLoader(TextureLoader, texture1);
  const CanvasStyle = {
    style1: {
      backgroundColor: "transparent",
      height: window.innerHeight,
      backgroundImage: `url(${spacebackground1})`,
      backgroundSize: "cover"
    },
    style2: {
      backgroundColor: "white",
      height: (window.innerHeight * 97) / 100,
      width: (window.innerWidth * 97) / 100,
      // backgroundImage: `url(${spacebackground1})`,
      backgroundSize: "cover"
    }
  };

  const Craft = ({ pos }) => {
    let thisMesh = useRef();

    useFrame((state, delta) => {});
    return (
      <mesh position={pos} scale={1} ref={thisMesh} rotation={[0, 2, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          attach={texture1}
          color="white"
          depthTest={true}
        />
      </mesh>
    );
  };

  const THREEBird = () => {};

  return (
    <div className="App">
      <nav className="nav">
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
      </nav>
      <Canvas
        style={CanvasStyle.style2}
        camera={{ position: [0, 0, 0], fov: 20 }}
      >
        <ambientLight position={[0, 0, 0]} color={"white"} intensity={2.5} />
      </Canvas>
    </div>
  );
}
