import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Rainbow } from "./rainbow";

export default function App() {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <color attach="background" args={["black"]} />
      <Scene />
    </Canvas>
  );
}

function Scene() {
  const ref = useRef();
  useFrame((_, delta) => (ref.current.rotation.z += delta / 5));
  return <Rainbow ref={ref} startRadius={0} endRadius={0.65} fade={0} />;
}
