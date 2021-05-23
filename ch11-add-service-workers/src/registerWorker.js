const register = (pathToWorker, onInstall, onUpdate, onError) => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }

        window.addEventListener('load', async () => {
            try {
                const registration = await navigator.serviceWorker.register(
                    process.env.PUBLIC_URL + pathToWorker
                );

                registration.onupdatefound = () => {
                    const worker = registration.installing;
                    if (worker) {
                        worker.onstatechange = () => {
                            if (worker.state === 'installed') {
                                if (navigator.serviceWorker.controller) {
                                    if (onUpdate) {
                                        onUpdate(registration);
                                    }
                                } else {
                                    if (onInstall) {
                                        onInstall(registration);
                                    }
                                }
                            }
                        };
                    }
                };
            } catch (err) {
                if (onError) {
                    onError(err);
                }
            }
        });
    }
}

const registerWorker = () => {
    register('/service-worker.js',
        reg => console.info('Service worker installed', reg),
        reg => console.info('Service worker updated', reg),
        err => console.error('Service worker failed', err),
    );
}

export default registerWorker;