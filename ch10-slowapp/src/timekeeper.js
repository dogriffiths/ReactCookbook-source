function* timekeeper() {
    let now = 0;
    while (true) yield -now + (now = performance.now())
}

export default timekeeper;