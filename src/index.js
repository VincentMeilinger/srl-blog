// Hot reloading
import * as _unused from "raw-loader!./index.ejs";
// TODO: disable before publishing

import Example from "./diagrams/svelte-mean.svelte";

// lazily initialize any diagram below the fold. E.G:
const exampleTag = document.getElementById("svelte-mean-dfigure");
let example;
exampleTag.addEventListener("ready", () => {
	const target = exampleTag.querySelector("#svelte-mean-target");
	example = new Example({ target });
});
