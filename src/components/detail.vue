<template>
  <main>
    <mt-header :title="movieDetails.nm">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
    <section class="movie-header">
      <div class="movie-background" :style="{backgroundImage: 'url(' +movieDetails.img+ ')'}"></div>
      <div class="movie-container">
        <router-link to="/">
          <img :src="movieDetails.img"/>
        </router-link>
        <div class="intro">
          <p class="name">{{movieDetails.nm}}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'list',
  data () {
    return {
      msg: '',
      id: null,
      movieDetails: {}
    }
  },
  mounted: function () {
    let _this = this
    this.id = this.$route.params.id
    this.$http.get('/movie/' + this.id + '.json', {}, {
      headers: {},
      emulateJSON: true
    }).then(function (res) {
      _this.movieDetails = res.data.data.MovieDetailModel
      console.log(JSON.stringify(_this.movieDetails))
    }, function (error) {
      console.log(error)
    })
  },
  methods: {}
}
</script>

<style scoped>
  .movie-header {
    padding: 15px;
    height: 148px;
    color: #fff;
    line-height: 1;
    overflow: hidden;
    position: relative;
    -webkit-filter: blur(0);
    filter: blur(0);
    background: #777;
  }

  .movie-header .movie-background {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;
    position: absolute;
    filter: blur(.6rem);
    -webkit-filter: blur(.6rem);
    background-size: cover;
    background-image: gray;
    background-repeat: no-repeat;
    background-position-y: 40%;
  }
  .movie-container{ height: 160px; position: absolute; top: 15px; left: 15px; z-index: 2;}
  .movie-container img{ position: absolute; left: 0; top: 0; z-index: 100; width: 104px; height: 148px; display: block; float: left;}
  .movie-container .intro{margin-left: 114px; font-size: 14px;}
</style>
