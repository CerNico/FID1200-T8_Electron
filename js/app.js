import { make_map } from "./map.js";
import { get_temp, getWeather } from "./wether.js";
import { } from "./anim.js";
import { handleMenu } from "./menu.js";

handleMenu();

const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          '../sw.js',
          {
            scope: '/',
          }
        );
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
  registerServiceWorker();

make_map();
//get_temp();
getWeather();