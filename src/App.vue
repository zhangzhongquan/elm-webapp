<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link  to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script >
import header from './components/header/header.vue';
const ERR_OK=0;
export default{
    data () {
        return{
          seller:{}
        };
    },
    created(){
      // GET /someUrl
            this.$http.get('api/seller').then((response) => {
                  response=response.body;

              if(response.errno===0)
              {
                  this.seller = response.data;
                console.log(this.seller)
              }

            });
    },

    components:{
         'v-header': header
      }
};
</script>

<style  lang="less" rel="stylesheet/less">
.tab{
  display: flex;
  flex-direction:row;
  width: 100%;
  height :40px;
  line-height: 40px;
  border-bottom: 1px solid #7e8c8d;

  .tab-item{
    flex: 1;
    text-align: center;
  }
}

.active{
  color: red;
}




</style>
