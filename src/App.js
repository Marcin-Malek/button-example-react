import { IntensitySwitch } from './IntensitySwitch';
import { ReactComponent as LightIcon } from "./icons/icon-4-5_light.svg";
import { ReactComponent as ModerateIcon } from "./icons/icon-4-5_moderate.svg";
import { ReactComponent as HeavyIcon } from "./icons/icon-4-5_heavy.svg";

function App() {
  return (
    <IntensitySwitch title="Fog" lightIcon={<LightIcon />} moderateIcon={<ModerateIcon />} heavyIcon={<HeavyIcon />} />
  );
}

export default App;
