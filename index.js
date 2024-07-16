import { add_boosts } from "./srs/js/add_boosts.js"
import { laptops } from "./srs/js/db.js"
import { render } from "./srs/js/render_select.js"

document.addEventListener("DOMContentLoaded", (e) => {
    add_boosts(laptops);

 }
)

const uniqProcessor = new Set();
const uniqRam = new Set();
const uniqStorage = new Set();
const uniqDisplay = new Set();
const uniqGrafics = new Set();

laptops.forEach(data => {
    const {
        specs: { processor, ram, storage, display, graphics }
    } = data;
    uniqProcessor.add(processor);
    uniqRam.add(ram);
    uniqStorage.add(storage);
    uniqDisplay.add(display)
    uniqGrafics.add(graphics);
});

render(document.getElementById(`processorFilter`), Array.from(uniqProcessor));
render(document.getElementById(`ramFilter`), Array.from(uniqRam));
render(document.getElementById(`storageFilter`), Array.from(uniqStorage));
render(document.getElementById(`displayFilter`), Array.from(uniqDisplay));
render(document.getElementById(`graphicsFilter`), Array.from(uniqGrafics));
