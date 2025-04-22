// export const isBrowser = () => typeof window !== 'undefined';

// export const safeWindow = {
//   scrollTo: (options) => {
//     if (isBrowser()) {
//       window.scrollTo(options);
//     }
//   },
//   get scrollY() {
//     if (isBrowser()) {
//       return window.scrollY;
//     }
//     return 0;
//   },
//   addEventListener: (event, handler, options) => {
//     if (isBrowser()) {
//       window.addEventListener(event, handler, options);
//       return true;
//     }
//     return false;
//   },
//   removeEventListener: (event, handler, options) => {
//     if (isBrowser()) {
//       window.removeEventListener(event, handler, options);
//       return true;
//     }
//     return false;
//   }
// };

// export const safeDocument = {
//   querySelector: (selector) => {
//     if (isBrowser()) {
//       return document.querySelector(selector);
//     }
//     return null;
//   },
//   querySelectorAll: (selector) => {
//     if (isBrowser()) {
//       return document.querySelectorAll(selector);
//     }
//     return [];
//   },
//   addEventListener: (event, handler, options) => {
//     if (isBrowser() && document.body) {
//       document.body.addEventListener(event, handler, options);
//       return true;
//     }
//     return false;
//   },
//   removeEventListener: (event, handler, options) => {
//     if (isBrowser() && document.body) {
//       document.body.removeEventListener(event, handler, options);
//       return true;
//     }
//     return false;
//   }
// };
