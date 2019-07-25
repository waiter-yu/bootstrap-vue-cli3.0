<template>
    <div class="container">

        <div class="row">
            <div class="col-lg-9 col-md-12">

                <div class="news">

                    <div class="newlist">
                        <div class="row new_info">
                            <div class="col-xs-12 listnew">
                                <div class="new_title">
                                    蔚来汽车成立科技有限公司，注册资本70亿元
                                </div>
                                <p>
                                    据天眼查数据显示，7月24日，蔚来汽车科技有限公司成立，法定代表人为蔚来汽车创始人李斌，注册资本70亿，经营范围为“新能源汽车整车及相关零部件的技术开发、技术服务、技术转让、技术咨询；汽车零部件的批发；货物进出口、代理进出口、技术进出口；销售汽车”。
                                </p>
                                <div class="new_tool">
                                    <i class="iconfont icon-history">2019-07-25</i> &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        <div class="row new_info">
                            <div class="col-xs-12 listnew">
                                <div class="new_title">
                                    阿里与最大CRM商Salesforce战略合作，全面集成阿里云
                                </div>
                                <p>
                                    在阿里云峰会·上海站上，全球最大CRM软件服务提供商Salesforce宣布与阿里巴巴达成战略合作，将集成阿里云向企业客户提供服务和支持。

                                    据介绍，Salesforce是全球知名软件服务商，根据合作协议，未来Salesforce的核心服务，包括销售云、服务云、商业云和
                                </p>
                                <div class="new_tool">
                                    <i class="iconfont icon-history">2019-07-25</i> &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        <div class="row new_info">
                            <div class="col-xs-12 listnew">
                                <div class="new_title">
                                    外媒称小米印度子品牌POCO或将被砍，小米暂未回应
                                </div>
                                <p>
                                    外媒91mobiles援引IDC的分析称，小米或将砍掉在印度设立的子品牌POCO。

                                    报道表示，POCO的产品定位与早前推出的Redmi K20 Pro相似，均是主打高性能以及性价比。而在品牌重叠的情况下，小米将很可能只保留后者。
                                </p>
                                <div class="new_tool">
                                    <i class="iconfont icon-history">2019-07-25</i> &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        <div class="row new_info">
                            <div class="col-xs-12 listnew">
                                <div class="new_title">
                                    传金融壹账通下半年赴美上市，中国平安不予置评
                                </div>
                                <p>
                                    今日有自媒体报道称：中国平安旗下金融科技子公司金融壹账通拟赴美上市，并已于7月23日开始上市前的非正式路演，与主要潜在买方进行了沟通。

                                    上述报道还称：为了获得更高估值，金融壹账通改变了今年初制定的在香港进行IPO的计划，并已向美国SEC递交上市申请，最
                                </p>
                                <div class="new_tool">
                                    <i class="iconfont icon-history">2019-07-25</i> &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 hidden-md hidden-sm hidden-xs content_right"><img src="../assets/remeng.jpg" alt=""></div>

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
.new_title {
  font-weight: 700;
  font-size: 16px;
  color: #2b3442;
  margin-bottom: 15px;
}
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
  margin-top: 15px;
   border-bottom: 1px dashed #e6e6e6;
  //  height: 175px;
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
      margin-top: 2rem;
      i {
        color: #a7b1c2;
        font-size: 12px;
      }
    }
  }
}
</style>