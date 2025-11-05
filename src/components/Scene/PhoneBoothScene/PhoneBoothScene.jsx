import { Base } from "./Base";
import { Booth } from "./Booth";
import { Bush } from "./Bush";
import { Denze } from "./Denze";
import { Guard } from "./Guard";
import { Phone } from "./Phone";
import { PhoneBoothGlass } from "./PhoneBoothGlass";
import { RedFlower } from "./RedFlower";
import { Reze } from "./Reze";
import { Store } from "./Store";
import { WhiteFlower } from "./WhiteFlower";

export const PhoneBoothScene = () => {
  return (
    <group>
      <Base />
      <Bush />
      <Guard />
      <Booth />
      <Phone />
      <RedFlower />
      <WhiteFlower />
      <Store />
      <Denze />
      <Reze />
      <PhoneBoothGlass />
    </group>
  );
};
