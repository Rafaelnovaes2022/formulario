<template>
  <div>
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form";

export default {
  components: { Form },
};
</script>

<style>

body {
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(to right, rgba(83, 105, 118), rgb(41, 46, 73));
}
</style>