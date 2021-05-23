/* eslint-disable no-restricted-globals */

import {clientsClaim} from 'workbox-core';
import {createHandlerBoundToURL, precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
    ({ request, url }) => {
        if (request.mode !== 'navigate') {
            return false;
        }
        if (url.pathname.startsWith('/_')) {
            return false;
        }
        if (url.pathname.match(fileExtensionRegexp)) {
            return false;
        }
        return true;
    },
    createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);
