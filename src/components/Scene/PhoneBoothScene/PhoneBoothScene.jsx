import { Base } from "./Base";
import { Booth } from "./Booth";
import { Bush } from "./Bush";
import { Denze } from "./Denze";
import { Floor } from "./Floor";
import { Guard } from "./Guard";
import { Phone } from "./Phone";
import { PhoneBoothGlass } from "./PhoneBoothGlass";
import { Rain } from "./Rain";
import { RedFlower } from "./RedFlower";
import { Reze } from "./Reze";
import { Store } from "./Store";
import { WhiteFlower } from "./WhiteFlower";

export const PhoneBoothScene = () => {
  return (
    <group>
      <Floor />
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
      <Rain />
    </group>
  );
};
