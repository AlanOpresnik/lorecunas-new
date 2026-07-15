import { ImagePlus, X } from "lucide-react";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

type NewImage = { file: File; previewUrl: string };

export function ProductImagesField({
  existingImages,
  newImages,
  onFilesSelected,
  onRemoveExisting,
  onRemoveNew,
  error,
}: {
  existingImages: string[];
  newImages: NewImage[];
  onFilesSelected: (files: FileList | null) => void;
  onRemoveExisting: (index: number) => void;
  onRemoveNew: (index: number) => void;
  error?: string;
}) {
  return (
    <Field>
      <FieldLabel>Imágenes</FieldLabel>

      {(existingImages.length > 0 || newImages.length > 0) && (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {existingImages.map((url, i) => (
            <ImageThumb key={`existing-${i}`} src={url} onRemove={() => onRemoveExisting(i)} />
          ))}
          {newImages.map((img, i) => (
            <ImageThumb key={`new-${i}`} src={img.previewUrl} onRemove={() => onRemoveNew(i)} />
          ))}
        </div>
      )}

      <label
        htmlFor="image-upload"
        className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed p-4 text-sm text-muted-foreground hover:bg-muted/50"
      >
        <ImagePlus className="size-4" />
        Subir imágenes
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            onFilesSelected(e.target.files);
            e.target.value = "";
          }}
        />
      </label>
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
}

function ImageThumb({ src, onRemove }: { src: string; onRemove: () => void }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-md border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover" />
      <button
        type="button"
        onClick={onRemove}
        className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        <X className="size-3" />
      </button>
    </div>
  );
}