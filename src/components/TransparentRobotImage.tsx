import React, { useEffect, useState } from 'react';

interface TransparentRobotProps {
  src: string;
  alt: string;
  className?: string;
}

export const TransparentRobotImage: React.FC<TransparentRobotProps> = ({ src, alt, className }) => {
  const [transparentSrc, setTransparentSrc] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Iterate through all pixels and key out pure white / studio lighting background
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Threshold for identifying white background studio pixels
          const minVal = Math.min(r, g, b);
          
          if (r > 215 && g > 215 && b > 215) {
            if (minVal > 238) {
              data[i + 3] = 0; // Fully transparent
            } else {
              // Smooth feathering for anti-aliasing around robot silhouette
              const factor = (238 - minVal) / 23;
              data[i + 3] = Math.floor(Math.max(0, Math.min(255, factor * 255)));
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        if (isMounted) {
          setTransparentSrc(dataUrl);
        }
      } catch (err) {
        console.error('Error removing image background:', err);
        if (isMounted) {
          setTransparentSrc(src);
        }
      }
    };

    img.onerror = () => {
      if (isMounted) {
        setTransparentSrc(src);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <img
      src={transparentSrc || src}
      alt={alt}
      referrerPolicy="no-referrer"
      className={`${className} ${!transparentSrc ? 'opacity-90' : 'opacity-100'} transition-opacity duration-300`}
    />
  );
};
