<template>
  <div class="result">
    <div class="result__box-1">
      <span class="filename">{{ responseData.name }}</span>
      <button class="replace-btn">
        <img src="../assets/replace.svg" alt="replace" /> Заменить файл
      </button>
      <div class="result__img">
        <img src="../assets/Frame.png" alt="" />
      </div>
    </div>

    <div class="result__box-2">
      <div class="tonality">
        <p>Тональность</p>
        <span class="tonality__value">{{ responseData.key }}</span>
      </div>

      <div class="speed">
        <p>Скорость</p>
        <span class="speed__value">{{ responseData.bpm }} bpm</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    responseData: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.result {
  max-width: 100%;
  width: 649px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  border-radius: 12px;
}

.result__box-1 {
  text-align: start;
  padding-right: 24px;
}

.filename {
  color: #828282;
  margin-right: 10px;
  font-weight: 500;
  font-size: 14px;
}

.replace-btn {
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.replace-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.replace-btn:hover img {
  transition: transform 0.2s ease;
}

.replace-btn:hover img {
  transform: rotate(180deg);
}

.result__img {
  margin-top: 12px;
}

.result__box-2 {
  border-left: 1px solid #828282;
  padding: 12px 20px;
}

.result__box-2 p {
  margin-bottom: 8px;
  color: #828282;
  font-size: 14px;
  font-weight: 500;
}

.result__box-2 span {
  color: #f2f2f2;
  font-size: 20px;
  font-weight: bold;
}

.tonality {
  margin-bottom: 12px;
}

.tonality__value {
}

.speed {
}

.speed__value {
}
</style>
