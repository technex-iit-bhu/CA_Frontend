import React, { useRef } from 'react';
import Image from 'next/image';

const ImageTrackComponent = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt =
        e instanceof MouseEvent
          ? e.clientX.toString()
          : e.touches[0].clientX.toString();
    }
  };

  const handleOnUp = () => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = '0';
      trackRef.current.dataset.prevPercentage =
        trackRef.current.dataset.percentage;
    }
  };

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    if (!trackRef.current || trackRef.current.dataset.mouseDownAt === '0')
      return;

    const mouseDelta =
      parseFloat(trackRef.current.dataset.mouseDownAt || '0') -
      (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX);
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const prevPercentage = trackRef.current.dataset.prevPercentage ?? '0';
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    trackRef.current.dataset.percentage = String(nextPercentage);

    // trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
    const images = document.getElementsByClassName(
      'image'
    ) as HTMLCollectionOf<HTMLElement>;

    const imagesArray = Array.from(images) as HTMLElement[];
    for (const image of imagesArray) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', handleOnDown);
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', handleOnUp);
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', handleOnMove);

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', handleOnDown);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', handleOnUp);
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', handleOnMove);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      id='image-track'
      data-mouse-down-at='0'
      data-prev-percentage='0'
      className='image-track'
    >
      <Image
        className='image'
        src='/Tnx_4.webp'
        draggable='false'
        alt='First Image'
      />
      <Image
        className='image'
        src='/Tnx_6.webp'
        draggable='false'
        alt='First Image'
      />
      <Image
        className='image'
        src='/Tnx_7.webp'
        draggable='false'
        alt='First Image'
      />
      <Image
        className='image'
        src='/Tnx_8.webp'
        draggable='false'
        alt='First Image'
      />
      <Image
        className='image'
        src='/Tnx_10.webp'
        draggable='false'
        alt='First Image'
      />
      <Image
        className='image'
        src='/Tnx_13.webp'
        draggable='false'
        alt='First Image'
      />
      <Image
        className='image'
        src='/Tnx_15.webp'
        draggable='false'
        alt='First Image'
      />
      <Image
        className='image'
        src='/Tnx17.webp'
        draggable='false'
        alt='First Image'
      />
    </div>
  );
};

export default ImageTrackComponent;
