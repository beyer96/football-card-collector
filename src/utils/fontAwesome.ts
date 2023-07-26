import { faFutbol } from '@fortawesome/free-solid-svg-icons'

export const addIconsToProject = (iconsArray: string[], callback: (icon: string) => void) => {
  iconsArray.forEach(icon => callback(icon));
};

export const solidIcons = [
  faFutbol,
];
