import {
  MicroscopeIcon,
  DiagnosticIcon,
  TestTubeIcon,
  BeakerIcon,
  ShieldIcon,
  PillIcon,
} from './icons';

export const categoryIcons: Record<string, (props: { className?: string }) => React.ReactElement> = {
  'laboratory-equipment': MicroscopeIcon,
  'diagnostic-devices': DiagnosticIcon,
  'consumables-supplies': TestTubeIcon,
  'reagents-test-kits': BeakerIcon,
  'ppe-safety': ShieldIcon,
  'pharmaceuticals-general': PillIcon,
};
