<template>
  <main>
    <mt-header fixed title="">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </main>
</template>

<script type="text/ecmascript-6">
  import star from '@/components/star'

  export default {
    name: 'list',
    components: {
      star
    },
    data() {
      return {
        msg: '',
        id: null,
      }
    },
    mounted: function () {

      let _this = this;
      // &limit=0&offset=10
      /*this.$http.get('/movie/' + this.$route.params.id + '.json', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (res) {
        console.log(res);
      }, function (error) {
        console.log(error)
      });*/


      this.$http.get('/movie/comments.json?movieid=' + this.$route.params.id, {
        movieid : this.$route.params.id
      }, {
        headers: {},
        emulateJSON: true
      }).then(function (res) {

        // console.log(res);

      }, function (error) {
        // console.log(error)
      });
    },
    computed: {},
    methods: {

    }
  }
</script>

<style scoped>
  .moviesList {
    overflow: hidden;
    padding: 0 !important;
    margin-top: 40px;
  }

  .moviesList li {
    padding: 10px;
    height: 84px;
    border-bottom: 1px solid #eee;
    position: relative;
  }

  .moviesList li img {
    height: 84px;
    width: 60px;
    position: absolute;
    left: 10px;
    top: 10px;
  }

  .moviesList li .right {
    width: 60px;
    height: 84px;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .moviesList li .right .fraction {
    font-size: 18px;
    color: #f60;
    height: 34px;
    line-height: 34px;
    text-align: right;
  }

  .moviesList li .right .fraction em {
    font-size: 16px;
    font-style: normal;
  }

  .moviesList li .right span {
    width: 100%;
    height: 28px;
    line-height: 28px;
    text-align: center;
    margin-top: 15px;
    border: 1px solid #e54847;
    display: block;
    font-size: 12px;
    color: #e54847;
    border-radius: 3px;
  }

  .moviesList li .intro {
    padding: 0 70px;
    height: 84px;
    text-align: left;
  }

  .moviesList li .intro .name {
    text-decoration: none;
    color: #333;
    overflow: visible !important;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
  }

  .moviesList li .intro .name span {
    height: 20px;
    background: #26a2ff;
    padding: 0 3px;
    color: #fff;
    display: inline-block;
    line-height: 20px;
    vertical-align: middle;
    border-radius: 3px;
  }

  .moviesList li .intro .name span i {
    font-style: normal;
  }

  .moviesList li .intro p {
    font-size: 14px;
    color: #999;
    width: 100%;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
