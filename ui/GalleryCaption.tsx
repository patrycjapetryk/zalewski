type Props = {
  caption: string;
};

export default function GalleryCaption({ caption }: Props) {
  return (
    <div className="flex items-end">
      <h3 className="text-xxs lg:text-xs xl:text-sm">{caption}</h3>
    </div>
  );
}
