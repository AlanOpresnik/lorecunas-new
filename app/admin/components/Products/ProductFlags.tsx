import { Checkbox } from "@/components/ui/checkbox";

export function ProductFlagsFields({
  featured,
  isNew,
  onFeaturedChange,
  onIsNewChange,
}: {
  featured: boolean;
  isNew: boolean;
  onFeaturedChange: (value: boolean) => void;
  onIsNewChange: (value: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox checked={featured} onCheckedChange={(v) => onFeaturedChange(Boolean(v))} />
        Destacado
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox checked={isNew} onCheckedChange={(v) => onIsNewChange(Boolean(v))} />
        Nuevo
      </label>
    </div>
  );
}