<template>
  <div class="contact-outer-wrapper">
    <div class="contact-inner-wrapper">
      <h3>Contact us today to learn more about how we can make your dream vision become a reality!</h3>
      <div class="contact-buttons">
        <Button class="abc-white"/>
        <Button class="abc-white"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-outer-wrapper {
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-outer-wrapper::before {
  content: "";
  height: inherit;
  position: absolute;
  background-color: rgba(33, 61, 98, 1);
  width: 100vw;
  left: 0;
  z-index: -1;
}
.contact-outer-wrapper .contact-inner-wrapper {
  text-align: center;
}
.contact-outer-wrapper .contact-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>