<template>
    <div>
        <!-- 导航条部分开始 -->
        <nav class="navbar navbar-default">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- logo存放区域 -->
                    <a class="navbar-brand" href="#">
                       <img src="../assets/ly_logo.png" alt="">
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav clearfix">
                        <li v-for="(item,index) in navlist" :key='index'>
                            <a href="#" :class="index==act?'active':''" @click="tab(index,item)">{{item}}</a>
                        </li>
                       
                    </ul>
                    <ul class="nav navbar-nav navbar-right hidden-sm hidden-xs">
                        <li>
                            <img src="../assets/1.jpg" alt=""  style="margin-top:4px">
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
export default {
    name: "mynav",
   
    data(){
        return{
            navlist:['资讯','快讯','猎云申报','活动','万罗学院','服务'],
             act:0
        }
    },
    methods:{
        tab(index,item){
            this.act=index
               
                if(item=="资讯"){
                    this.$router.push('dashboard')
                }else if(item=="快讯"){
                     this.$router.push('consult')
                }
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-brand{
    display: inline-block;
    width: 160px;
    height: 60px;
    img{
        width: 100%;
        height: 100%;
    }
}
ul{
    // line-height: 60px;
    margin-top: 8px;
    margin-left: 60px;
    a{

    }
}
.navbar-default{
    background-color: #fff;
}
.active{
    color: #85a7ed !important;
}
</style>