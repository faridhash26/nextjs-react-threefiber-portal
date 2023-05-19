import SceneRenderer from "@/component/three/SceneRenderer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <SceneRenderer />
    </div>
  );
}
