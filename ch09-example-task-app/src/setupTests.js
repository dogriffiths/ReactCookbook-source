// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
function getGlobalObj() {
    // eslint-disable-next-line no-undef
    return typeof window !== 'undefined' ? window : global;
}

const localStorageMock = {};

Object.defineProperty(getGlobalObj(), "localStorage", {
    value: {
        getItem: (name) => {
            return localStorageMock[name];
        },
        setItem: (name, v) => {
            localStorageMock[name] = v;
            return null;
        },
        clear: () => {
            for (const prop of Object.getOwnPropertyNames(localStorageMock)) {
                delete localStorageMock[prop];
            }
        }
    },
    writable: true
});
