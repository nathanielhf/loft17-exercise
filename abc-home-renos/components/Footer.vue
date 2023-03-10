<script setup lang="ts">

const config = useAppConfig()
</script>

<template>
  <footer>
    <Logo />
    <div class="double-column">
      <div>
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
        <p>
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
footer .social-media {
  margin-top: 20px;
}
footer .social-media p {
  margin: 0px;
}
footer .social-media svg {
  color: #213D62
}
footer .social-media a {
  text-decoration: none;
  margin-right: .5em;
}
.bigtext::after {
  background-image: url('@/assets/right-arrow.svg');
  content: "";
  height: 28px;
  width: 28px;
  display: inline-block;
  background-size: cover;
}
</style>