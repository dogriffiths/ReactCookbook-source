import timekeeper from "./timekeeper";

describe('timing', () => {
    it('should be able to time loops with dates', () => {
        const beforeDate = new Date();
        for (let i = 0; i < 1000; i++) {
        }
        const afterDate = new Date();
        console.log('1,000 loops took', afterDate.getTime() - beforeDate.getTime())
    });
    it('should be able to time loops with time and timeEnd', () => {
        console.time('1,000 loops')
        for (let i = 0; i < 1000; i++) {
        }
        console.timeEnd('1,000 loops')
    });
    it('should be able to time loops with performance now', () => {
        const before0 = performance.now();
        for (let i = 0; i < 1000; i++) {
        }
        const after0 = performance.now();
        console.log('1,000 loops took', after0 - before0)
        const before1 = performance.now();
        for (let i = 0; i < 100000; i++) {
        }
        const after1 = performance.now();
        console.log('100,000 loops took', after1 - before1)
    });
    it('should be able to time loops with a timekeeper', () => {
        const t = timekeeper();
        t.next();
        for (let i = 0; i < 1000; i++) {
        }
        console.log('1,000 loops took', t.next().value)
        for (let i = 0; i < 100000; i++) {
        }
        console.log('100,000 loops took', t.next().value)
    });
});