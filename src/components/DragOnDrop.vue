<template>
  <div class="container">
    <div
      class="drop-area"
      ref="dropform"
      v-bind:class="{ highlight: isActive }"
      @dragenter="handleEnter"
      @dragleave="handleLeave"
      @drop="handleLeave"
    >
      <form class="my-form">
        <p>Перетащите файл сюда</p>
        <p>или</p>
        <input
          type="file"
          id="fileElem"
          ref="file"
          v-on:change="handleFiles()"
        />
        <label class="button" for="fileElem">Загрузить файл</label>
      </form>
      <!-- <progress class="progress-bar" max="100" value="0"></progress> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: [],
      isActive: false
    };
  },
  mounted() {
    [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop",
    ].forEach(
      function(evt) {
        this.$refs.dropform.addEventListener(
          evt,
          function(e) {
            e.preventDefault();
            e.stopPropagation();
          }.bind(this),
          false
        );
      }.bind(this)
    );

    this.$refs.dropform.addEventListener(
      "drop",
      function(e) {
        const data = e.dataTransfer.files;
        this.file = [...data];
        this.$emit("upload-file", this.file);
        console.log(this.file);
      }.bind(this)
    );
  },
  methods: {
    handleFiles() {
      this.file = [...this.$refs.file.files];
      this.$emit("upload-file", this.file);
      console.log(this.file);
    },
    handleEnter() {
      this.isActive = !this.isActive;
    },
    handleLeave() {
      this.isActive = !this.isActive;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic");

.drop-area {
  background: rgba(196, 196, 196, 0.1);
  border: 1px dashed rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  border-radius: 8px;
  width: 501px;
  height: 208px;
  font-family: "Roboto" sans-serif;
  margin: 100px auto;
  padding: 20px;
  transition: all 0.2s ease-in 0s;
  animation: appearance 0.5s linear;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes appearance {
  0% {
    transform: scale(0) translateY(-50%);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

.drop-area:hover {
  border-color: #2f80ed;
}

.drop-area.highlight {
  background: rgba(196, 196, 196, 0.8);
  border: none;
}

.my-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.my-form p:first-child {
  margin: 0;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
}

.my-form p:nth-child(2) {
  margin: 8px 0;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  opacity: 0.2;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #2f80ed;
  box-sizing: border-box;
  border-radius: 4px;
  width: 113px;
  height: 30px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #2f80ed;

  transition: all 0.5s ease 0s;
}

.button:hover {
  background: rgb(41, 41, 41);
  color: white;
  border: none;
}

#fileElem {
  display: none;
}

.progress-bar {
  background: inherit;
}
</style>
