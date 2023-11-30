// ImageTrackComponent.js

import React, { useRef} from 'react';

const ImageTrackComponent = () => {
const trackRef = useRef<HTMLDivElement>(null);

const handleOnDown = (e: MouseEvent | TouchEvent) => {
    if (trackRef.current) {
        trackRef.current.dataset.mouseDownAt = e instanceof MouseEvent ? e.clientX.toString() : e.touches[0].clientX.toString();
    }
};

const handleOnUp = () => {
    if (trackRef.current) {
        trackRef.current.dataset.mouseDownAt = '0';
        trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage;
    }
};

const handleOnMove = (e: MouseEvent | TouchEvent) => {
    if (!trackRef.current || trackRef.current.dataset.mouseDownAt === '0') return;

    const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt || '0') - (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX);
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const prevPercentage = trackRef.current.dataset.prevPercentage ?? '0';
    const nextPercentageUnconstrained =
      parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.dataset.percentage = String(nextPercentage);

    trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
    const images = document.getElementsByClassName('image') as HTMLCollectionOf<HTMLElement>

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
    }, [])

  return (
    <div
      ref={trackRef}
      id="image-track"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      className="image-track"
    >
        <img
        className="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        alt="First Image"
        />
        <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
        <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img className="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img className="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
        <img className="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
        <img className="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
    </div>
  );
};

export default ImageTrackComponent;
