<template>
  <div>
    <van-swipe-cell v-for="(u, index) in list" :key="index">
      <div
        class="list"
        :class="[Boolean(u.isOnline) ? 'isOnline' : 'isOffline']"
        @click="toChat(u)"
      >
        <div class="img">
          <img :src="u.circleUrl" />
        </div>
        <div class="info">
          <div class="name">{{ u.name }}</div>
          <div class="msg">
            <i>{{ u.tel }}</i>
          </div>
        </div>
        <div class="time">
          <div class="l1">{{ u.registerTime.substring(0, 10) }}</div>
          <div class=""></div>
        </div>
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getLsit();
  },
  methods: {
    getLsit() {
      this.$axios
        .get('/getlist', { param: {} })
        .then((response) => {
          this.list = response.filter((user) => user.tel !== this.$store.state.user.tel);
        })
        .catch((error) => {
          console.info(error);
        });
    },
    toChat(user) {
      this.$router.push({ path: `/chat/${user.id}` });
      sessionStorage.setItem('receiver', JSON.stringify(user));
    },
  },
};
</script>

<style lang="scss">
.list.isOffline {
  color: gray;
  font-size: 90%;
}

.list {
  height: 3.4rem;
  padding: 0.2rem 1rem 0;
  background-color: white;
  border-bottom: 1px solid #f7f8fa;
  line-height: 1.5rem;
  .img {
    img {
      float: left;
      width: 3rem;
      height: 3rem;
      border-radius: 0.5rem;
    }
  }
  .info {
    float: left;
    margin-left: 1rem;
  }
  .time {
    float: right;
    .l1 {
      font-size: 80%;
    }
  }
}

.goods-card {
  margin: 0;
}

.delete-button {
  height: 100%;
}

.list.isOffline img {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
</style>
