<script setup lang="ts">

const config = useAppConfig()
</script>

<template>
  <footer>
    <Logo />
    <div class="footer-columns">
      <div class="column-one">
        <h2>Like what you see?<br>Let's Talk</h2>
        <div class="social-media">
          <p>
            <a :href="config.twitterLink"><font-awesome-icon icon="fa-brands fa-twitter"/></a>
            <a :href="config.twitterLink">@ABCRenos</a>
          </p>
          <p>
            <a :href="config.facebookLink"><font-awesome-icon icon="fa-brands fa-facebook"/></a>
            <a :href="config.facebookLink">@ABCRenovations</a>
          </p>
          <p>
            <a :href="config.instagramLink"><font-awesome-icon icon="fa-brands fa-instagram"/></a>
            <a :href="config.instagramLink">@ABCRenovations</a>
          </p>
        </div>
      </div>
      <address>
        <p>
          Email:<br>
          <a href="mailto:johndoe@websitecom" class="bigtext">johndoe@websitecom</a>
        </p>
        <p style="margin: 20px 0">
          Phone:<br>
          <a href="tel:555-555-5555" class="bigtext">555-555-5555</a>
        </p>
        <p>
          Location:
          <div class="bigtext">
            123 Anywhere Street<br>
            City, Postal Code
          </div>
        </p>
      </address>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin: 140px 0;
}
footer .column-one {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
footer .social-media p {
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0px;
  color: #213D62;
}
footer .social-media svg {
  color: #213D62
}
footer .social-media a {
  text-decoration: none;
  margin-right: .5em;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.footer-columns h2, p {
  margin-top: 0px;
}
address p {
  margin: auto;
  font-size: 28px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(33, 61, 98, 0.5);
  font-style: normal;
}
address .bigtext {
  font-size: 32px;
  color: rgba(33, 61, 98, 1);
}
.bigtext::after {
  background-image: url('@/assets/right-arrow.svg');
  content: "";
  height: 28px;
  width: 28px;
  display: inline-block;
  background-size: cover;
  margin-left: 10px;
}
</style>