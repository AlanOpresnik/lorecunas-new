import { useEffect, useState } from "react";

type NewImage = { file: File; previewUrl: string };

export function useImageManager(initialImages: string[] = []) {
  const [existingImages, setExistingImages] = useState<string[]>(initialImages);
  const [newImages, setNewImages] = useState<NewImage[]>([]);

  const reset = (images: string[] = []) => {
    setExistingImages(images);
    setNewImages((prev) => {
      prev.forEach((img) => URL.revokeObjectURL(img.previewUrl));
      return [];
    });
  };

  useEffect(() => {
    return () => {
      newImages.forEach((img) => URL.revokeObjectURL(img.previewUrl));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addFiles = (fileList: FileList | null) => {
    if (!fileList?.length) return;
    const files = Array.from(fileList).filter((f) => f.type.startsWith("image/"));
    const withPreview = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setNewImages((prev) => [...prev, ...withPreview]);
  };

  const removeExisting = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeNew = (index: number) => {
    setNewImages((prev) => {
      const target = prev[index];
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((_, i) => i !== index);
    });
  };

  return { existingImages, newImages, addFiles, removeExisting, removeNew, reset };
}