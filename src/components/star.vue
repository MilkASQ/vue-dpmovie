<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  // 评分有几个等级
  const LENGTH = 5;
  // 全星有几个
  const CLS_ON = 'on';
  // 半星有几个
  const CLS_HALF = 'half';
  // 不亮的星星有几个
  const CLS_OFF = 'off';
  export default {
    props: {
      // 图片尺寸
      size: {type: Number},
      // 评分
      score: {type: Number}
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      // 包含
      itemClasses() {
        let result = [];
        // 分数取整
        let score = Math.floor(this.score * 2) / 2;
        // 判断是否有半星
        let hasDecimal = score % 1 !== 0;
        // 计算有几个全星
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style>
  .star-item {display: inline-block; background-repeat: no-repeat; width: 14px; height: 14px; margin-left: 2px; background-size: 100%; }
  .star-item.on {background-image: url(../assets/star-full-new.png);}
  .star-item.half {background-image: url(../assets/star-half-new.png);}
  .star-item.off {background-image: url(../assets/star-empty-new.png);}
  .star.star-18 .star-item{ width: 18px; height: 18px;}
  .star.star-14 .star-item{ width: 14px; height: 14px;}
  .star.star-10 .star-item{ width: 10px; height: 10px;}
</style>
