import { usePreferencesStore } from "@/type/store/use-preferences-store";
import { Switch } from "@/src/components/ui/switch";

export default function BackgroundSwitch() {
  const showBg = usePreferencesStore((state) => state.showBackground);

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Background
      </label>
      <Switch
        checked={showBg}
        onCheckedChange={(checked) =>
          usePreferencesStore.setState({ showBackground: checked })
        }
        className="my-1.5"
      />
    </div>
  );
}
