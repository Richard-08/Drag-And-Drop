<template>
  <div id="app">
    <h1>Tonality Application</h1>

    <DragOnDrop @upload-file="uploadFile" v-if="!isLoaded" />

    <Preview
      v-else
      v-bind:files="files"
      @remove-file="removeFile"
      @submit-file="submitFile"
    />

    <Result v-bind:responseData="responseData" />
  </div>
</template>

<script>
import DragOnDrop from "@/components/DragOnDrop";
import Preview from "@/components/Preview";
import Result from "@/components/Result";
import Loader from "@/components/Loader";

export default {
  name: "App",
  data() {
    return {
      files: [],
      isLoaded: false,
      responseData: {
        id: 1,
        name: "Filename.wav",
        key: "C | Am",
        bpm: 120,
        modulationTime: null,
        additionalKey: null,
      },
    };
  },
  components: {
    DragOnDrop,
    Preview,
    Result,
    Loader,
  },
  methods: {
    uploadFile(file) {
      this.files.push(...file);
      this.isLoaded = !this.isLoaded;
    },
    removeFile() {
      this.files.length = 0;
      this.isLoaded = !this.isLoaded;
    },
    submitFile() {
      const url = ""; /* url for load files */
      let formData = new FormData();
      let file = this.files[0];

      formData.append("file", file);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => console.log("Done uploading...", response))
        .catch((e) => console.error(JSON.stringify(e.message)));
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  list-style: none;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  padding: 20px;
}
</style>
