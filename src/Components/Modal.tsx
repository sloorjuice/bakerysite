import Image from "next/image";

interface ModalProps {
  imageSrc: string;
  onClose: () => void;
}

export default function Modal({ imageSrc, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div className="relative">
        <Image
          src={imageSrc}
          alt="Selected"
          width={950}
          height={400}
          className="rounded-lg"
        />
        <button
          className="absolute top-2 right-2 text-white bg-black bg-opacity-75 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}