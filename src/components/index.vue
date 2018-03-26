<template>
  <main>
    <mt-header title="猫眼电影" fixed></mt-header>
    <ul class="moviesList" v-if="movies">
      <li v-for="item in movies">
        <router-link :to="{name:'Detail',params: { id: item.id }}">
          <img :src="item.img">
          <div class="intro">
            <p class="name">{{item.nm}} <span v-if="item['3d'] || item['imax']"><i v-if="item['3d']">3d</i><i v-if="item['imax']">imax</i></span></p>
            <p class="scm" v-if="item.scm">{{item.scm}}</p>
            <p class="showInfo" v-if="item.showInfo">{{item.showInfo}}</p>
          </div>
          <div class="right">
            <div class="fraction">{{item.sc}}<em>分</em></div>
            <span>购票</span>
          </div>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    name: 'list',
    data() {
      return {
        msg: '',
        movies: []
      }
    },
    mounted: function () {
      let _this = this;
      this.$http.get('/movie/list.json?type=hot&offset=0&limit=20', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (res) {
        _this.movies = res.data.data.movies;
        // console.log(res);
      }, function (error) {
        // console.log(error)
      })
    },
    methods: {}
  }
</script>

<style scoped>
  .moviesList{ overflow: hidden; padding: 0 !important; margin-top: 40px;}
  .moviesList li{ padding: 10px; height: 84px; border-bottom: 1px solid #eee; position: relative;}
  .moviesList li img{ height: 84px; width: 60px; position: absolute; left: 10px; top: 10px;}
  .moviesList li .right{ width: 60px; height: 84px;  position: absolute; right: 10px; top: 10px;}
  .moviesList li .right .fraction{font-size: 18px; color: #f60; height: 34px; line-height: 34px; text-align: right;}
  .moviesList li .right .fraction em{font-size: 16px; font-style: normal;}
  .moviesList li .right span{width: 100%; height: 28px; line-height: 28px; margin-top: 15px; border:1px solid #e54847; display: block; font-size: 12px; color: #e54847; border-radius: 3px;}
  .moviesList li .intro{padding: 0 70px; height: 84px; text-align: left;}
  .moviesList li .intro .name{ text-decoration: none; color: #333; overflow: visible !important; white-space: nowrap; text-overflow: ellipsis; height: 34px; line-height: 34px; font-size: 14px;}
  .moviesList li .intro .name span{height: 20px; background: #26a2ff; padding: 0 3px; color: #fff; display: inline-block; line-height: 20px; vertical-align: middle; border-radius: 3px;}
  .moviesList li .intro .name span i{font-style: normal;}
  .moviesList li .intro p{font-size: 14px; color: #999; width: 100%; height: 22px; line-height: 22px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
</style>
