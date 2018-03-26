<template>
  <main>
    <mt-header title="猫眼电影">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>

  </main>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'list',
    data() {
      return {
        msg: '',
        id: null,
        movies: []
      }
    },
    mounted: function () {
      let _this = this;
      this.id = this.$route.params.id;
      console.log(this.id);
      this.$http.get("/movie/" + this.id + '.json', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (res) {
        _this.movies = res.data.data.movies;
        console.log(res);
      }, function (error) {
        console.log(error)
      })
    },
    methods: {}
  }
</script>

<style scoped>
  ul, li {
    list-style: none;
  }
</style>
