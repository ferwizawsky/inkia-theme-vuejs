<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const iframeContent = ref("");

onMounted(async () => {
  try {
    const response = await axios.get("/builder.html");
    let tmp = `
    <h1 class="text-3xl font-bold text-clifford">Hello world!</h1>
    <div class="bg-amber-400 h-[400vh]"></div>
    <h1 class="text-3xl font-bold text-clifford">Hello world!</h1>
    `;
    iframeContent.value = response.data;
    iframeContent.value = iframeContent.value.replace(`<!--REPLACE-->`, tmp);
    console.log(getNameClass(tmp));
  } catch (error) {
    console.error("Error fetching HTML:", error);
  }
});

function getNameClass(htmlString) {
  const classPattern = /class="([^"]*)"/g;
  let match;
  const classStrings = [];
  while ((match = classPattern.exec(htmlString)) !== null) {
    classStrings.push(match[1]);
  }
  const classes = classStrings.map((classString) => classString.split(" "));
  const uniqueClasses = [...new Set(classes.flat())];
  return classes;
}
function sendMessageToIframe() {
  const iframe = document.getElementById("myIframe");
  const message = { type: "greeting", text: "Hello from iframe!" };
  iframe.contentWindow.postMessage(message);
}

onMounted(() => {
  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) {
      return;
    }
    if (event.data?.type) console.log("Message from iframe:", event.data);
  });
});
</script>

<template>
  <div>
    <button @click="sendMessageToIframe()">Send Message to Iframe</button>
    <div class="max-w-[400px] h-[700px] border mx-auto">
      <iframe
        id="myIframe"
        :srcdoc="iframeContent"
        height="100%"
        width="100%"
        title="Iframe Example"
      ></iframe>
    </div>
  </div>
</template>
