import {
  BadgeCheck,
  Briefcase,
  Car,
  Gamepad2,
  HeartPulse,
  Home,
  Joystick,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';

// Mapa kebab-case → ícono Lucide. Un nombre desconocido cae en Sparkles
// (nunca se dibuja un placeholder de color).
const ICONS = {
  'badge-check': BadgeCheck,
  briefcase: Briefcase,
  car: Car,
  'gamepad-2': Gamepad2,
  'heart-pulse': HeartPulse,
  home: Home,
  joystick: Joystick,
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
  trophy: Trophy,
  users: Users,
  zap: Zap,
};

export default function Icon({ name, ...props }) {
  const Component = ICONS[name] ?? Sparkles;
  return <Component aria-hidden="true" {...props} />;
}
