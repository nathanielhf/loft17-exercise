<template>
  <div>
    <Carousel />
  </div>
  <div>
    <DoubleColumn>
      <template #header>
        <h2>ABC Home Renovations</h2>
      </template>
      <template #default>
        <p>Our experienced professionals have years of experience and a passion for excellence when it comes to transforming your kitchen area. We provide services such as designing and building new spaces, installing fixtures, appliances, plumbing work, electrical work, and HVAC work. With so many options available, you can trust us to handle all of your kitchen renovation needs with precision and satisfaction.</p>
      </template>
      <template #image>
        <img src="@/images/abc-kitchen.jfif">
      </template>
    </DoubleColumn>
    <DoubleColumn class="reverse">
      <template #header>
        <h2>ABC Home Renovations</h2>
      </template>
      <template #default>
        <p>We will work with you to come up with the perfect plan for your space, and then make it happen! From plumbing and electrical work to HVAC services, we provide everything necessary to transform your bathroom into the space of your desires. Let us give you the perfect bathroom makeover and help you create the home of your dreams!
        </p>
      </template>
      <template #image>
        <img src="@/images/abc-bathroom.jfif">
      </template>
    </DoubleColumn>
  </div>
</template>

<style scoped>
img {
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  border-radius: 12px;
}
h2 {
  margin-top: 0;
}
</style>