<template>
  <div id="app">
    <div class="heaer">
      <van-nav-bar title="标题" left-text="返回"  left-arrow @click-left="onClickLeft">
        <template #right v-if="logined">
          <van-icon name="share" size="20" @click="showShare = true" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <router-view />
    </div>
    <div class="footer" v-if="logined">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="friends-o" badge="99+" to="/list">好友</van-tabbar-item>
        <van-tabbar-item icon="chat-o" to="/chat">聊天</van-tabbar-item>
        <van-tabbar-item icon="award-o">发现</van-tabbar-item>
        <van-tabbar-item icon="setting-o" dot  to="/setting">设置</van-tabbar-item>
      </van-tabbar>
    </div>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
  methods: {
    onSelect(option) {
      this.$toast(option.name);
      this.showShare = false;
    },
    onClickLeft() {
      window.history.back();
    },
    onClickRight() {
      this.$toast('按钮');
    },
  },
  computed: {
    // 计算属性的 getter
    logined() {
      return Boolean(this.$store.state.user.tel);
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .container {
    flex: 1;
    background-color: #f7f8fa;
  }
}
</style>
