import React, {
  useRef,
  useState,
  useEffect,
  ImgHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
  children?: ReactNode;
}

const SmartImage: React.FC<Props> = ({
  src,
  alt = '',
  className = '',
  style = {},
  sizes = '100vw',
  priority = false,
  children,
  loading = 'lazy',
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(priority);

  useEffect(() => {
    if (priority || !containerRef.current) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // const ext = src.split('.').pop()?.toLowerCase() ?? 'jpg';

  const srcSe = src;
  const srcSetOriginal = src;
  console.log('====================================');
  console.log(src);
  console.log('====================================');

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', ...style }}
    >
      {isVisible && (
        <picture>
          <source srcSet={srcSe} type="image.avif'" sizes={sizes} />
          <source srcSet={srcSetOriginal} type={`image/avif`} sizes={sizes} />
          <img
            src={src} // نسخه اصلی مستقیم
            alt={alt}
            decoding="async"
            loading={priority ? 'eager' : loading}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'none',
            }}
            {...rest}
          />
        </picture>
      )}

      {children && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SmartImage;
