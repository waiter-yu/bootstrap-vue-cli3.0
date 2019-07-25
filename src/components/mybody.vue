<template>
    <div class="container">
        <div class="ad_box hidden-xs">
            <img src="../assets/t.jpg" alt="">
        </div>
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <div class="new_box">
                    <img src="../assets/new.jpg" alt="" class="hidden-md hidden-sm hidden-xs">
                </div>
                <div class="news">
                    <ul class="tab">
                        <li :class="act==index?'active':''" v-for="(item,index) in tablist" :key="index" @click="act=index">
                            {{item}}
                        </li>
                    </ul>
                    <div class="newlist">
                        <div class="row new_info">
                            <div class="col-xs-4"><img src="../assets/new1.jpg" alt=""></div>
                            <div class="col-xs-8 listnew">
                                <a href="javascript:;">硬件创业者“再造”大湾区</a>
                                <p>“但智能制造的主要市场在中国，中国是最大的市场，这是一个非常重要的优势。”</p>
                                <div class="new_tool">
                                    <i class="iconfont icon-zuozhe">北小小</i> &nbsp;&nbsp;&nbsp;
                                    <i class="iconfont icon-history">47分钟前</i> &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>

                        </div>
                        <div class="row new_info">
                            <div class="col-xs-4"><img src="../assets/new2.jpg" alt=""></div>
                            <div class="col-xs-8 listnew">
                                <a href="javascript:;">陈向东：一次失败的招人，成本是该员工年薪的15倍</a>
                                <p>愿意忍受取舍，真的很需要勇气。</p>
                                <div class="new_tool">
                                    <i class="iconfont icon-zuozhe">北小小</i> &nbsp;&nbsp;&nbsp;
                                    <i class="iconfont icon-history">4小时前</i> &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>

                        </div>
                        <div class="row new_info">
                            <div class="col-xs-4"><img src="../assets/new4.jpg" alt=""></div>
                            <div class="col-xs-8 listnew">
                                <a href="javascript:;">陆金所退出P2P，下一个消失的又是谁？﻿——P2P 死亡盘点</a>
                                <p>共 120 家 P2P 网贷平台被标记「已死亡」。</p>
                                <div class="new_tool">
                                    <i class="iconfont icon-zuozhe">李未</i> &nbsp;&nbsp;&nbsp;
                                    <i class="iconfont icon-history">14分钟前</i> &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 hidden-md hidden-sm hidden-xs content_right"><img src="../assets/content_right.jpg" alt=""></div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tablist: ["全部", "早起项目", "创业动态", "A轮后", "上市公司", "投资机构", "课堂"],
            act: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.content_right {
  padding-left: 30px;
}
.news {
  ul {
    height: 40px;
    width: 100%;
    overflow-x: auto;
    margin: 20px 0;
    white-space: nowrap;
    li {
      cursor: pointer;
      // float: left;
      display: inline-block;
      padding: 10px 15px;
      background-color: #e1eafd;
      margin-right: 25px;
      border-radius: 4px;
    }
    .active {
      cursor: pointer;
      // float: left;
      display: inline-block;
      padding: 10px 15px;
      background-color: #91afef;
      margin-right: 25px;
      border-radius: 4px;
      color: #fff;
    }
  }
}
.new_info {
    margin-top: 25px;
    //  height: 175px;
    border-bottom: 1px dashed #e6e6e6;
  .listnew {
    // position: relative;
   height: 100%;
    a {
      font-size: 16px;
      margin: 0;
      color: #2a3342;
      word-break: break-all;
      word-wrap: break-word;
    }
    p {
      color: #878e9a;
      word-break: break-all;
      text-align: justify;
    }
    .new_tool {
    //   position: absolute;
      margin-top: 3rem;
      i {
        color: #a7b1c2;
        font-size: 12px;
      }
    }
  }
}
</style>