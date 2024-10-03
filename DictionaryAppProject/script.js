const inputEl = document.getElementById("input");
const infotextEl = document.getElementById("info-text");
const meaningcontainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
    try {
        infotextEl.style.display = "block";
        infotextEl.innerText = `Searching the meaning of "${word}"...`;
        meaningcontainerEl.style.display = "none";

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        if (result.title) {
            infotextEl.style.display = "none";
            meaningcontainerEl.style.display = "block";
            titleEl.innerText = word;
            meaningEl.innerText = "N/A";
            audioEl.style.display = "none"; 
        } else {
            infotextEl.style.display = "none";
            meaningcontainerEl.style.display = "block";
            titleEl.innerText = result[0].word;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;

            const audioSrc = result[0].phonetics[0]?.audio;
            if (audioSrc) {
                audioEl.style.display = "block";
                audioEl.src = audioSrc;
            } else {
                audioEl.style.display = "none"; 
            }
        }
    } catch (error) {
        console.log(error);
        infotextEl.innerText = `Error: Word not found`;
    }
}

inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }
});
