// Hot reloading
import * as _unused from "raw-loader!./index.ejs";
// TODO: disable before publishing

import Example from "./diagrams/svelte-mean.svelte";


// lazily initialize any diagram below the fold. E.G:
const exampleTag = document.getElementById("svelte-mean1-dfigure");
let example;
exampleTag.addEventListener("ready", () => {
	const target = exampleTag.querySelector("#svelte-mean1-target");
	example = new Example({ target });
});

import Example2 from "./diagrams/svelte-mean2.svelte";
const exampleTag2 = document.getElementById("svelte-mean2-dfigure");
let example2;
exampleTag2.addEventListener("ready", () => {
	const target = exampleTag2.querySelector("#svelte-mean2-target");
	example2 = new Example2({ target });
});