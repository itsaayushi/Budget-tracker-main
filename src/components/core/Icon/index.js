import { getIconComponent } from './helper';

function Icon({ name, className }) {
  const IconComponent = getIconComponent(name);
  return IconComponent ? <IconComponent className={className} /> : null;
}

export default Icon;
