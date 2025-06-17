// src/components/SmartImage.tsx
import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  CSSProperties,
  ImgHTMLAttributes,
  ReactNode,
} from 'react';

const BREAKPOINTS = [480, 768, 1024, 1440];

/* ---------- Props ---------- */
interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;                 // فقط همین الزامى است
  alt?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;        // اگر children باشد و bg داشته باشى → background
  sizes?: string;
  priority?: boolean;
}

/* ---------- Component ---------- */
const SmartImage = ({
  src,
  alt = '',
  className = '',
  style = {},
  children,
  sizes = '100vw',
  loading = 'lazy',
  priority = false,
  ...rest
}: Props) => {
  /* refs / states ------------------------------------ */
  const outerRef = useRef<HTMLDivElement | HTMLImageElement>(null);
  const [visible, setVisible] = useState(priority);
  const [loaded, setLoaded]   = useState(priority);
  const [mode,   setMode]     = useState<'img' | 'background'>('img'); // تشخیص خودکار

  /* paths --------------------------------------------- */
const ext  = src?.split('.').pop()?.toLowerCase() ?? 'jpg';
const base = src ? src.slice(0, -(ext.length + 1)) : '';
const blurSrc   = base ? `${base}-blur.${ext}` : '';
const webpBase  = base ? `${base}.webp` : '';
const srcSetJpg = base ? BREAKPOINTS.map(w => `${base}-${w}.${ext} ${w}w`).join(', ') : '';
const srcSetWeb = base ? BREAKPOINTS.map(w => `${base}-${w}.webp ${w}w`).join(', ') : '';

  /* lazy-observer ------------------------------------- */
  useEffect(() => {
    if (priority) return;
    const ob = new IntersectionObserver(
      ([e], o) => { if (e.isIntersecting) { setVisible(true); o.disconnect(); } },
      { rootMargin: '300px' }
    );
    outerRef.current && ob.observe(outerRef.current);
    return () => ob.disconnect();
  }, [priority]);

  /* auto-detect img vs background --------------------- */
  useLayoutEffect(() => {
 

    const el = outerRef.current as HTMLElement | null;
    if (!el) return;

    // اگر styled-components براش background-image ست کرده باشد
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none') setMode('background');
  }, [children]);

  /* shared style -------------------------------------- */
  useEffect(() => {
    if (!src) return;

    const img = new Image();
    // Clean the CSS value if it contains url(...)
    const cleanedUrl = src.replace(/url\(["']?(.+?)["']?\)/, '$1');
    img.src = cleanedUrl;


    img.onload = () => {
          console.log('=============setLoaded=======================');
    console.log(cleanedUrl);
    console.log('===============setLoaded=====================');
      setLoaded(true);
    };

    img.onerror = () => {
      console.error('Failed to load background image.');
    };
  }, [src]);
  useEffect(() => {
    console.log('==============onload======================');
    console.log(loaded);
    console.log('==============onload======================');
  }, [loaded])
  /* --------------------------------------------------- */
  if (mode === 'background') {
    return (
      <div
        ref={outerRef as React.RefObject<HTMLDivElement>}
        className={className}
              

        style={{
          ...style,
    transition: 'filter .35s ease',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
          // اگر کاربر با CSS، background-image تعریف کرده باشد بطور پیش‌فرض همان را می‌گذاریم
          backgroundImage:
            src ,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }

  /* img mode ----------------------------------------- */

  return (
    <picture
      ref={outerRef as React.RefObject<HTMLDivElement>}
      className={className}
     style={{
          ...style,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   
           
        }}
    >
    
        <>
          <source srcSet={srcSetWeb} type="image/webp" sizes={sizes} />
          <source srcSet={srcSetJpg} type={`image/${ext}`} sizes={sizes} />
        </>
     
      <img
        src={src}
        alt={alt}
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        {...rest}
      />
    </picture>
  );
};

export default SmartImage;
