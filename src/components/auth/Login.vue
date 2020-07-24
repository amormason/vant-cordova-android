<template>
  <div class="login">
    <div class="img">
      <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="tel"
        name="username"
        label="手机"
        placeholder="手机"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block :loading="loading" type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      tel: '13277092789',
      password: '123456',
    };
  },
  mounted() {
    this.$store.commit('setUser', {});
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.$axios
        .post('/login', {
          tel: this.tel,
          password: this.password,
        })
        .then((response) => {
          if (response.success) {
            this.$toast('登录成功');
            this.$store.commit('setUser', response.data);
            this.$store.commit('setToken', response.token);
            setTimeout(() => {
              this.$router.push({ path: '/list' });
            }, 500);
          } else {
            this.$toast('手机号码和密码不匹配');
          }
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss">
.login {
  padding-top: 5rem;
  .img {
    margin: 3rem auto;
    text-align: center;
  }
}
</style>
