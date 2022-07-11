import { IntensitySwitch } from './IntensitySwitch';
import { ReactComponent as LightIcon } from "./icons/icon-4-5_light.svg";
import { ReactComponent as ModerateIcon } from "./icons/icon-4-5_moderate.svg";
import { ReactComponent as HeavyIcon } from "./icons/icon-4-5_heavy.svg";
import { Background } from './styled';

function App() {
  return (
    <Background>
      <IntensitySwitch
        title="Fog"
        lightIcon={<LightIcon />}
        moderateIcon={<ModerateIcon />}
        heavyIcon={<HeavyIcon />}
      />
    </Background>
  );
}

export default App;
