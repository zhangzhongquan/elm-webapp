<template>
<div class="header">
 <div class="content-wrapper">
   <div class="avatar">
     <img :src="seller.avatar" width="64" height="64" alt="加载失败">

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
  }

  };

</script>

<style style='stylus' rel="stylesheet/stylus">

</style>
