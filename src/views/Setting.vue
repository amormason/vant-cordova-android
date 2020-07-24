<template>
  <div class="setting">
    <div style="padding-bottom:3rem">
      <van-button type="primary" icon="close" round hairline @click="logout" :loading="loading"
        >退出登录</van-button
      >
    </div>
    <van-circle v-model="currentRate" :rate="30" :speed="100" :text="user.name" />
    <van-empty :description="user.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRate: 0,
      loading: false,
      user: this.$store.state.user,
    };
  },
  methods: {
    logout() {
      this.loading = true;
      this.$axios.post('logout', this.$store.state.user).then((response) => {
        if (response.success) {
          this.$toast('登出系统成功');
          this.clear();
        } else {
          this.$toast('登出系统失败');
        }
        this.loading = false;
      });
    },

    clear() {
      this.$store.commit('setToken', {});
      this.$store.commit('setUser', {});
      setTimeout(() => {
        this.$router.push({ path: '/login' });
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.setting {
  padding-top: 8rem;
  text-align: center;
}
</style>
