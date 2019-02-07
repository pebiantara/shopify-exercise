import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

// Bootstrap v4
import 'bootstrap/js/dist/util.js';
import 'bootstrap/js/dist/alert.js';
import 'bootstrap/js/dist/button.js';
import 'bootstrap/js/dist/carousel.js';
import 'bootstrap/js/dist/collapse.js';
// import 'bootstrap/js/dist/dropdown.js';
import 'bootstrap/js/dist/modal.js';
// import 'bootstrap/js/dist/tooltip.js';
// import 'bootstrap/js/dist/popover.js';
import 'bootstrap/js/dist/scrollspy.js';
import 'bootstrap/js/dist/tab.js';
import 'fontawesome';

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}
