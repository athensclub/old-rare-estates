import DiscordIcon from "./DiscordIcon.vue";
import TwitterIcon from "./TwitterIcon.vue";
import InstagramIcon from "./InstagramIcon.vue";
import TelegramIcon from "./TelegramIcon.vue";
import CopyIcon from "./CopyIcon.vue";
import HeartIcon from "./HeartIcon.vue";
import RedHeartIcon from "./RedHeartIcon.vue";
import ThreeDotsHorizontalIcon from "./ThreeDotsHorizontalIcon.vue";
import VRIcon from "./VRIcon.vue";
import BlueCheckmarkIcon from "./BlueCheckmarkIcon.vue";
import GreyCheckmarkIcon from "./GreyCheckmarkIcon.vue";

const CUSTOM_ICONS = {
  discord: {
    component: DiscordIcon,
  },
  twitter: {
    component: TwitterIcon,
  },
  instagram: {
    component: InstagramIcon,
  },
  telegram: {
    component: TelegramIcon,
  },
  copy: {
    component: CopyIcon,
  },
  heart: {
    component: HeartIcon,
  },
  "red-heart": {
    component: RedHeartIcon,
  },
  "three-dots-horizontal": {
    component: ThreeDotsHorizontalIcon,
  },
  vr: {
    component: VRIcon,
  },
  "grey-checkmark": {
    component: GreyCheckmarkIcon,
  },
  "blue-checkmark": {
    component: BlueCheckmarkIcon,
  },
};

export default CUSTOM_ICONS;
