<template>
<div class="header">
 <div class="content-wrapper">
   <div class="avatar">
     <img :src="seller.avatar" width="64" height="64" alt="加载失败">
   </div>
   <div class="content">
     <div class="title">
       <span class="brand"></span>
       <span class="name">{{seller.name}}</span>
     </div>
     <div class="description">
       {{seller.description}}/{{seller.deliveryTime}}分钟送达
     </div>
     <div v-if="seller.supports" class="support">
       <span class="icon" :class="classMap[0]"></span>
       <span class="text">{{seller.supports[0].description}}</span>
     </div>
   </div>
 </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default{
  props:{
      seller:{
          type:Object
      }
  },
    data(){
      return{
        classMap:['decrease','discount','special','invoice','guarantee']
      }

    }

  };

</script>

<style lang="less" rel="stylesheet/less">
@import "../../common/less/mixin2";
    .header{
      color: #fff;
      background: black;

      .content-wrapper{
        padding:24px 12px 18px 24px;
        font-size: 0;
      }
      .avatar{
        display: inline-block;
        vertical-align: top;
      }
      .content{
        margin-left: 14px;
        display: inline-block;
        font-size: 14px;
        .title{
          margin: 2px 0 8px 0;
        }
        .brand{
          display:inline-block;;
          width: 30px;
          height: 18px;
          vertical-align: top;
          .bg-image('brand');
          background-repeat:round;
        }
        .name{
          margin-left: 6px;
          font-size: 16px;
          line-height:18px;
          font-weight:bold;
        }
        .description{
          margin-bottom: 10px;
          line-height: 12px;
          font-size:12px;
        }
        .support{

          .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-repeat: round;


          }
          .decrease{
            .bg-image('decrease_1')
          }
          .discount{
            .bg-image('discount_1')
          }
          .special{
            .bg-image('special_1')
          }
          .invoice{
            .bg-image('invoice_1')
          }
          .guarantee{
            .bg-image('guarantee_1')
          }
          .text{
            display: inline-block;
            font-size: 10px;
            line-height: 10px;

          }
        }

      }
    }
</style>
