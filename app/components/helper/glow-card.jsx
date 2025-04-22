// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { isBrowser } from '@/utils/browser';

// const GlowCard = ({ children, identifier }) => {
//   const [isMounted, setIsMounted] = useState(false);
//   const containerRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted || !isBrowser()) return;

//     // Use refs instead of document queries
//     const CONTAINER = containerRef.current;
//     const CARDS = cardsRef.current;

//     if (!CONTAINER || !CARDS.length) return;

//     const CONFIG = {
//       proximity: 40,
//       spread: 80,
//       blur: 12,
//       gap: 32,
//       vertical: false,
//       opacity: 0,
//     };

//     const UPDATE = (event) => {
//       for (const CARD of CARDS) {
//         if (!CARD) continue;
        
//         const CARD_BOUNDS = CARD.getBoundingClientRect();
//         if (
//           event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
//           event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
//           event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
//           event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
//         ) {
//           CARD.style.setProperty('--active', 1);
//         } else {
//           CARD.style.setProperty('--active', CONFIG.opacity);
//         }

//         const CARD_CENTER = [
//           CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
//           CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
//         ];

//         let ANGLE =
//           (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
//             180) /
//           Math.PI;
//         ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
//         CARD.style.setProperty('--start', ANGLE + 90);
//       }
//     };

//     const handlePointerMove = (e) => UPDATE(e);

//     document.addEventListener('pointermove', handlePointerMove);

//     const RESTYLE = () => {
//       CONTAINER.style.setProperty('--gap', CONFIG.gap);
//       CONTAINER.style.setProperty('--blur', CONFIG.blur);
//       CONTAINER.style.setProperty('--spread', CONFIG.spread);
//       CONTAINER.style.setProperty(
//         '--direction',
//         CONFIG.vertical ? 'column' : 'row'
//       );
//     };

//     RESTYLE();
//     UPDATE();

//     // Cleanup event listener
//     return () => {
//       document.removeEventListener('pointermove', handlePointerMove);
//     };
//   }, [identifier, isMounted]);

//   // Initialize refs after component mounts
//   useEffect(() => {
//     if (isMounted && isBrowser()) {
//       cardsRef.current = Array.from(document.querySelectorAll(`.glow-card-${identifier}`));
//     }
//   }, [identifier, isMounted]);

//   return (
//     <div 
//       className={`glow-container-${identifier} glow-container`}
//       ref={containerRef}
//     >
//       <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
//         <div className="glows"></div>
//         {children}
//       </article>
//     </div>
//   );
// };

// export default GlowCard;
