<template>
  <main>
    <mt-header fixed :title="movieDetails.nm">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
    <section class="movie-header">
      <div class="movie-background" :style="{backgroundImage: 'url(' +movieDetails.img+ ')'}"></div>
      <div class="movie-container">
        <img :src="movieDetails.img"/>
        <div class="intro">
          <p class="name">{{movieDetails.nm}}</p>
          <p><star :size="18" :score="movieDetails.sc / 2"></star></p>
          <p class="small">（{{movieDetails.snum}}人平分）</p>
          <p class="small white">{{movieDetails.cat}}<span class="tag"><em>3d</em>&nbsp;<em v-if="movieDetails.imax">imax</em></span>
          </p>
          <p class="small">{{movieDetails.src}}/{{movieDetails.dur}}分钟</p>
          <p class="small">{{movieDetails.rt}}</p>
          <!--<p>导演：{{movieDetails.dir}}</p>-->
        </div>
      </div>
    </section>
    <section class="buyButton">
      <mt-button type="danger">特惠购票</mt-button>
    </section>
    <section class="movieIntro">
      <div class="inset" :class="{min:introStatus}" v-html="movieDetails.dra">
        {{movieDetails.dra}}
      </div>
      <span @click="changeStatus">{{introStatus? '展开' : '收起'}}</span>
    </section>
    <section class="lineBackground"></section>
    <section class="mediaList">
      <div class="title">媒体库</div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in mediaList">
          <img :src="item" v-lazy.container="item"/>
        </swiper-slide>
      </swiper>
    </section>
    <section class="lineBackground"></section>
    <section class="userComment">
      <div class="title">短评</div>
      <ul>
        <li v-for="item in comment">
          <div class="top">
            <star :size="14" :score="item.score"></star>
            <span class="time">{{item.time}}</span>
          </div>
          <div class="content">{{item.content}}</div>
          <div class="userInfo">
            <div class="image"><img :src="item.avatarurl" v-if="item.avatarurl" /></div>
            <div class="name">{{item.nickName}}</div>
            <div class="commentReply"><span>{{item.reply}}</span>人评论</div>
            <div class="commentLike"><span>{{item.approve}}</span>人点赞</div>
          </div>
        </li>
      </ul>
      <router-link :to="{name:'Comments',params: { id: movieDetails.id }}" class="commentAll">查看全部{{commentTotal}}条短评论</router-link>
    </section>
    <section class="lineBackground"></section>
  </main>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { Lazyload } from 'mint-ui';
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import star from '@/components/star'
  Vue.use(Lazyload);
  export default {
    name: 'list',
    components: {
      swiper,
      swiperSlide,
      star
    },
    data() {
      return {
        msg: '',
        id: null,
        movieDetails: {},
        introStatus: true,
        mediaList: [],
        swiperOption: {
          slidesPerView: 'auto',
        },
        comment: [],
        commentTotal: 0
      }
    },
    mounted: function () {
      let _this = this;
      this.$http.get('/movie/' + this.$route.params.id + '.json', {}, { headers: {}, emulateJSON: true}).then(function (res) {

          // 影片信息
          _this.movieDetails = res.data.data.MovieDetailModel;

          // 媒体库图片
          let newData = [];
          res.data.data.MovieDetailModel.photos.filter(function (item) { newData.push(item.replace("/w.h", "")) });
          _this.mediaList = newData;

          // 短评
          _this.comment = res.data.data.CommentResponseModel.hcmts.slice(0,3);
          _this.commentTotal = res.data.data.CommentResponseModel.total;
          // console.log(res);

        }, function (error) {
          // console.log(error)
        });
    },
    computed:{},
    methods: {
      changeStatus() {
        this.introStatus = !this.introStatus;
      }
    }
  }
</script>

<style scoped>
  .movie-header { margin-top: 40px; padding: 15px; height: 148px; color: #fff; line-height: 1; overflow: hidden; position: relative; -webkit-filter: blur(0); filter: blur(0); background: #777; }
  .movie-header .movie-background { top: 0; left: 0; right: 0; bottom: 0; width: 100%; z-index: 0; position: absolute; filter: blur(.6rem); -webkit-filter: blur(.6rem); background-size: cover; background-image: gray; background-repeat: no-repeat; background-position-y: 40%;  }
  .movie-header .movie-background:after{content: ''; width: 100%; height: 100%; background: rgba(0,0,0,0.2); position: absolute; left: 0; top: 0; z-index: 1;}
  .movie-container {height: 160px; position: absolute; top: 15px; left: 15px; z-index: 2; }
  .movie-container img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 104px;
    height: 148px;
    display: block;
    float: left;
  }
  .movie-container .intro {
    margin-left: 114px;
    font-size: 14px;
    text-align: left;
  }
  .movie-container .intro p {
    height: 20px;
    line-height: 20px;
    color: #eee;
    opacity: 0.85;
  }
  .movie-container .intro p.name {
    height: auto;
    line-height: 12px;
    color: #fff;
    margin-bottom: 3px;
    opacity: 1;
    font-size: 16px;
    margin-top: 5px;
  }
  .movie-container .intro p.white {color: #fff; font-size: 14px !important; }
  .movie-container .intro p .tag {
    border: 1px solid #eee;
    padding: 0 1px;
    margin-left: 5px;
  }
  .movie-container .intro p .tag em {
    font-style: normal;
    padding: 0 1px;
  }
  .movie-container .intro p.small {font-size: 12px;}
  .movieIntro{padding: 0 15px; font-size: 14px; color: #666; text-align: left; line-height: 22px; border-bottom: 1px solid #ddd;  }
  .movieIntro .inset.min {height: 66px; overflow: hidden;}
  .movieIntro span{display: block; margin: auto; text-align: center; height: 34px; line-height: 34px; color: #f60; }
  .buyButton { padding: 15px; }
  .buyButton button {display: block; width: 100%; }
  .lineBackground{width: 100%; height: 10px; background: #f6f6f6; }
  .mediaList{ width: 100%; border-top:1px solid #ddd; border-bottom: 1px solid #ddd; overflow: hidden;}
  .mediaList .title{ height: 40px; text-align: left; line-height: 40px; font-size: 16px; padding: 0 15px;}
  .mediaList .swiper-slide{ width: auto; height: 80px; overflow: hidden; margin-bottom: 15px;}
  .mediaList .swiper-slide img{ max-width: 160px; height: 80px; display:block; margin-left: 15px;}

  .userComment{ width: 100%; border-top:1px solid #ddd; border-bottom: 1px solid #ddd; overflow: hidden;}
  .userComment .title{ height: 40px; text-align: left; line-height: 40px; font-size: 16px; padding: 0 15px; border-bottom:1px solid #ddd;}
  .userComment ul{overflow: hidden; padding: 0 15px;}
  .userComment ul li{ border-bottom: 1px solid #eee; padding: 10px 0;}
  .userComment ul li .top{height: 20px; line-height: 20px; color: #999; overflow: hidden;}
  .userComment ul li .top span{float: left;}
  .userComment ul li .top .time{font-size: 14px; float: right;}
  .userComment ul li .top .star{ float: left;}
  .userComment ul li .content{ font-size: 14px; color: #333; line-height: 160%; padding: 5px 0 10px 0;text-align: justify; text-justify: inter-ideograph;}
  .userComment ul li .userInfo{ height: 28px; line-height: 28px;}
  .userComment ul li .userInfo .image{ width: 28px; height: 28px; border-radius: 16px; overflow: hidden; float: left; margin-right: 8px; background: url("../assets/user-image.png") no-repeat; background-size: 28px;}
  .userComment ul li .userInfo .image img{width: 28px; height: 28px; display: block;}
  .userComment ul li .userInfo .name{ float: left; color: #999; font-size: 12px;}
  .userComment ul li .userInfo .commentReply,.userComment ul li .userInfo .commentLike{ float: right; color: #666; font-size: 14px;}
  .userComment ul li .userInfo .commentLike{ margin-right: 10px;}
  .userComment ul li .userInfo .commentReply span,.userComment ul li .userInfo .commentLike span{color: #f60;}
  .userComment .commentAll{ height: 40px; display: block; text-align: center; line-height: 40px; color: #e00;}
</style>
