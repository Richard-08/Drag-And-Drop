<template>
  <div class="preview">
    <div class="preview__box">
      <span class="preview__filename">{{ files[0].name }}</span>
      <button class="remove-btn" v-on:click="$emit('remove-file')">
        <img src="../assets/remove.png" alt="remove" />
      </button>
    </div>

    <button v-on:click="$emit('submit-file')" class="define-btn">Определить тональность</button>
  </div>
</template>

<script>
export default {
  props: {
    files: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.preview {
  max-width: 100%;
  width: 369px;
  margin: 100px auto;
  animation: appearance 0.5s linear;
  transition: all 0.3s ease;
}

@keyframes appearance {
  0% {
    transform: scale(0) translateY(-50%);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

.preview__box {
  height: 60px;
  background-color: rgba(196, 196, 196, 0.2);
  border-radius: 8px;
  padding: 0 24px;
  margin-bottom: 28px;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.preview__box:hover {
  background-color: rgba(196, 196, 196, 0.5);
}

.preview__filename {
  color: black;
}

button {
  cursor: pointer;
}

.remove-btn {
  background-color: transparent;
  border: none;
}

.remove-btn:hover img {
  transition: all 0.2s ease;
}

.remove-btn:hover img {
  animation: rotate 0.3s linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}

.define-btn {
  width: 223px;
  height: 44px;
  background-color: #2f80ed;
  border: 1px solid #2f80ed;
  border-radius: 4px;
  color: #fff;
  transition: all 0.2s ease;
}

.define-btn:hover {
  background-color: transparent;
  color: #2f80ed;
}
</style>
