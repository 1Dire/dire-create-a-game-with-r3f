import Player from "./Player.jsx";
import Lights from "./Lights.jsx";
import useGame from "./stores/useGame.jsx";
import { Level, BlockSpinner } from "./Level.jsx";
import { Physics } from "@react-three/rapier";
export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      <color args={["#bdedfc"]} attach="background" />
      <Physics>
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
    </>
  );
}
