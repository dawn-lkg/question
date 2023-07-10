<template>
  <div>
    <el-container>
      <el-header>
        <div class="header_main">
          <div class="left_box">
            <div class="left_title">
              <img src="../assets/logo.png" />
              <h1>共创云</h1>
            </div>
            <div class="mid_nav">
              <a>服务产品</a>
              <a>科创需求</a>
              <a>专利论文</a>
              <a>交易大数据</a>
            </div>
          </div>
          <div class="right_box">
            <el-button type="primary">登录</el-button>
            <el-button>注册</el-button>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="panel">
          <div class="panel_header">
            <div class="title_box">
              <img src="../assets/logo2.png" />
              <p>资源大厅</p>
            </div>
            <div class="search_box">
              <el-input
                placeholder="请输入资源名称或用户名搜索"
                class="input-with-select"
                v-model="param.keywords"
              >
                <template #append>
                  <el-button :icon="Search" @click="getList">搜索</el-button>
                </template>
              </el-input>
            </div>
          </div>
          <div class="panel_tabs">
            <p class="tabs_item active_tab">服务</p>
          </div>
          <div class="panel_main">
            <div class="panel_condition">
              <div class="condition">
                <div class="condition_label">服务类型：</div>
                <div class="condition_list">
                  <p
                    class="condition_list_item"
                    :class="{ select: param.serviceTypeId == '' }"
                    @click="setServiceType()"
                  >
                    不限
                  </p>
                  <p
                    class="condition_list_item"
                    :class="item.id == param.serviceTypeId ? 'select' : ''"
                    v-for="item in oneLeavel"
                    :key="item.id"
                    @click="setServiceType(item.id)"
                  >
                    {{ item.name }}
                  </p>
                </div>
                <div class="condition_switch">
                  <p>更多</p>
                  <el-icon class="down"><ArrowDown /></el-icon>
                  <el-icon class="up" style="display: none;"><ArrowUp /></el-icon>
                </div>
              </div>

              <div class="condition">
                <div class="condition_label">{{ param.serviceTypeId==''?"技术领域":"二级分类"}}:</div>
                <div class="condition_list">
                  <p
                    class="condition_list_item"
                    :class="{ select: param.serviceTypeId2 == '' }"
                    @click="setServiceType2()"
                  >
                    不限
                  </p>
                  <p
                    class="condition_list_item"
                    :class="{ select: param.serviceTypeId2 == item.id }"
                    v-for="item in twoLeavel"
                    :key="item.id"
                    @click="setServiceType2(item.id)"
                  >
                    {{ item.name }}
                  </p>
                </div>
                <div class="condition_switch">
                  <p>更多</p>
                  <el-icon class="down"><ArrowDown /></el-icon>
                  <el-icon class="up" style="display: none;"><ArrowUp /></el-icon>
                </div>
              </div>

              <div class="condition">
                <div class="condition_label">数据来源：</div>
                <div class="condition_list">
                  <p
                    class="condition_list_item"
                    :class="{ select: param.dataOrigin == '' }"
                    @click="setDataOrigin()"
                  >
                    不限
                  </p>
                  <p
                    class="condition_list_item"
                    :class="{ select: param.dataOrigin == item.id }"
                    v-for="item in threeLeavel"
                    :key="item.id"
                    @click="setDataOrigin(item.id)"
                  >
                    {{ item.name }}
                  </p>
                </div>
                <div class="condition_switch">
                  <p>更多</p>
                  <el-icon class="down"><ArrowDown /></el-icon>
                  <el-icon class="up" style="display: none;"><ArrowUp /></el-icon>
                </div>
              </div>

              <div class="condition">
                <div class="condition_label">地区：</div>
                <div class="condition_list">
                  <p
                    class="condition_list_item"
                    :class="{ select: param.province == '' }"
                    @click="setProvance()"
                  >
                    不限
                  </p>
                  <p
                    class="condition_list_item"
                    :class="{ select: param.province == item.name }"
                    v-for="item in provinceList"
                    :key="item.name"
                    @click="setProvance(item.name)"
                  >
                    {{ item.name }}
                  </p>
                </div>
                <div class="condition_switch">
                  <p>更多</p>
                  <el-icon class="down"><ArrowDown /></el-icon>
                  <el-icon class="up" style="display: none;"><ArrowUp /></el-icon>
                </div>
              </div>

            </div>

            
            <div class="result">
              <div class="result_header">
                <div class="result_header_item" style="flex: 420px">
                  服务名称
                </div>
                <div class="result_header_item" style="flex: 440px">
                  发布用户
                </div>
                <div class="result_header_item" style="flex: 300px">
                  服务类型
                </div>
                <div class="result_header_item" style="flex: 200px">
                  成功成交数
                </div>
                <div class="result_header_item" style="flex: 180px">
                  信用评价
                </div>
              </div>
              <div class="result_body">
                <div
                  class="result_body_item"
                  v-for="item in List"
                  :key="item.id"
                >
                  <div class="item_col" style="flex: 1 1 420px">
                    <p class="tw-line">{{ item.title }}</p>
                  </div>
                  <div class="item_col" style="flex: 1 1 440px">
                    <img
                      :src="
                        item.avatarUrl == ''
                          ? '/src/assets/default_avatar.png'
                          : item.avatarUrl
                      "
                      alt=""
                    />
                    <p class="tw-line">{{ item.orgName }}</p>
                  </div>
                  <div class="item_col" style="flex: 1 1 300px">
                    <p class="tw-line" style="color: #606266; padding: 0 20px">
                      {{ item.serviceTypeName }}
                    </p>
                  </div>
                  <div class="item_col" style="flex: 1 1 200px">
                    <p class="tw-line" style="color: #f1b221; padding: 0 20px">
                      {{ item.totalDeal }}
                    </p>
                  </div>
                  <div class="item_col" style="flex: 1 1 180px">
                    <p
                      class="tw-line"
                      style="color: #3473e6; padding: 0 20px; font-weight: 700"
                    >
                      {{ item.avgScore }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-pagination @current-change="handlerSize" current-page="param.pageNum" background layout="prev, pager, next,jumper" :total="total" />
        </div>
      </el-main>

    </el-container>
  </div>
</template>

<script>
 import { Search, ArrowDown,ArrowUp } from "@element-plus/icons-vue";
import { getServiceType, getDefaultType } from "../api/tabAPI";
import { getData } from "../api/listAPi";
 import { ref, onMounted } from "vue";
export default {
  name: "search",
  components: {
    Search,
    ArrowDown,
    ArrowUp
  },
  data() {
    return {
      List: [],
      oneLeavel: [],
      twoLeavel: [],
      threeLeavel: [
        {
          id: "nttcc",
          name: "共创云",
        },
        { id: "51kehui", name: "科惠网" },
        { id: "jxstc", name: "江西省网上常设技术市场" },
        { id: "hntpe", name: "潇湘科技要素大市场" },
      ],
      provinceList: [
        { name: "湖北省" },
        { name: "湖南省" },
        { name: "江西省" },
        { name: "北京市" },
        { name: "天津市" },
        { name: "河北省" },
        { name: "山西省" },
        { name: "内蒙古自治区" },
        { name: "辽宁省" },
        { name: "吉林省" },
        { name: "黑龙江省" },
        { name: "上海市" },
        { name: "江苏省" },
        { name: "浙江省" },
        { name: "安徽省" },
        { name: "福建省" },
        { name: "山东省" },
        { name: "河南省" },
        { name: "广东省" },
        { name: "广西壮族自治区" },
        { name: "海南省" },
        { name: "重庆市" },
        { name: "四川省" },
        { name: "贵州省" },
        { name: "云南省" },
        { name: "西藏自治区" },
        { name: "陕西省" },
        { name: "甘肃省" },
        { name: "青海省" },
        { name: "宁夏回族自治区" },
        { name: "新疆维吾尔自治区" },
        { name: "台湾省" },
        { name: "香港特别行政区" },
        {name:"澳门特别行政区"}
      ],
      total:0,
      param: {
        pageNum: 1,
        pageSize: 10,
        keywords: "",
        serviceTypeId: "",
        serviceTypeId2: "",
        technicalId: "",
        province: "",
        dataOrigin: "",
        logicStatus: "1",
      },
    };
  },
  created() {
    this.getSerTab();
    this.getTwoLeavel();
    this.getList();
  },
  mounted() {
    let node = document.querySelectorAll(".condition");
    let child=document.querySelectorAll(".condition_switch");
    console.log(child);
    for (let i = 0; i < child.length; i++) {
      child[i].index=i;
      child[i].deg=true;
      child[i].onclick=function(e){
        const deg=child[this.index].deg;
        let p=this.querySelector("p");
        let down=this.querySelector(".down");
        let up=this.querySelector(".up");
        if(deg){
          node[this.index].style.height="auto";
          p.innerHTML="收起"
          down.style.display="none";
          up.style.display="block";
        }else{
          node[this.index].style.height="40px";
          p.innerHTML="更多";
          down.style.display="block";
          up.style.display="none";
        }
        child[this.index].deg=!deg;
      }
    }
  },
  methods: {
    async getSerTab() {
      const res = await getServiceType();
      this.oneLeavel = res.data.data;
    },
    async getTwoLeavel() {
      const res = await getDefaultType();
      this.twoLeavel = res.data.data.list;
    },
    async getList() {
      const res = await getData(this.param);
      this.List = res.data.data.list;
      console.log(res);
      this.total=res.data.data.total;
    },
    setServiceType(id) {
      id=id||'';
      this.param.serviceTypeId = id;
      this.oneLeavel.forEach((item) => {
        if (item.id == id) {
          this.twoLeavel = item.children;
          this.param.serviceTypeId2 = "";
        }
      });
      if (id == "") this.getTwoLeavel();
      this.getList();
    },
    setServiceType2(id) {
      id=id||'';
      this.param.serviceTypeId2 = id;
      this.getList();
    },
    setDataOrigin(id) {
      id=id||'';
      this.param.dataOrigin = id;
      this.getList();
    },
    setProvance(name){
      name=name||'';
      this.param.province=name;
      this.getList();
    },
    handlerSize(pageNum){
      this.param.pageNum=pageNum;
      this.getList();
    }
  },
};
</script>

<style scoped>
.el-container,.el-main{
  height: 100%;
  background: #f6f7f8;
}
.el-header,
.el-footer {
  background: #fff;
}
.main {
  padding: 30px 0;
}
.el-header,
.el-footer {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
.el-header {
  width: 100%;
  height: 50px;
}
.header_main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.header_main,
.panel {
  width: 1200px;
  margin: 0 auto;
}
.left_box {
  display: flex;
  align-items: center;
}
.left_title {
  display: flex;
  align-items: center;
  margin-right: 50px;
}
.left_title img {
  margin-right: 10px;
}
.left_title h1 {
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #3473e6;
}
.mid_nav {
  display: flex;
  align-items: center;
}
.mid_nav a {
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  color: #606266;
  cursor: pointer;
}
.mid_nav > a + a {
  margin-left: 24px;
}
.mid_nav a:hover {
  color: rgb(45, 161, 254);
}
.right_box .el-button:nth-child(1) {
  background: #3473e6;
}
.right_box .el-button:nth-child(2) {
  color: #3473e6;
  border-color: #3473e6;
}
.panel {
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  overflow: hidden;
  font-size: 14px;
  width: 1200px;
}
.panel_main {
  min-height: 100px;
}
.panel_header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
}
.title_box {
  display: flex;
  height: 22px;
  align-items: center;
}
.title_box img {
  margin-right: 16px;
}
.search_box {
  display: flex;
  width: 540px;
}
.search_box p {
  color: #303133;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
}
.search_box .el-button {
  background: #3473e6;
  color: #fff;
  display: flex;
  align-items: center;
}
.panel_tabs {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 30px;
  margin-bottom: 10px;
  background: #f7f8f9;
  border-radius: 4px;
  box-sizing: border-box;
}
.tabs_item {
  line-height: 30px;
}
.active_tab {
  color: #3473e6;
  border-bottom: 2px solid #3473e6;
}
.panel_condition {
  width: 100%;
  padding: 0 20px;
  margin-bottom: 30px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-sizing: border-box;
}
.condition {
  display: flex;
  overflow: hidden;
  margin-bottom: 10px;
  height: 40px;
}
.condition_label {
  width: 120px;
  line-height: 30px;
  padding-left: 10px;
  margin-top: 10px;
  color: #909399;
  font-size: 14px;
  display: flex;
}
.condition_list {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 74px;
}
.condition_list_item {
  cursor: pointer;
  line-height: 20px;
  padding: 5px 10px;
  margin: 0;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 2px;
  color: #303133;
  display: flex;
}
.select,
.condition_list_item:hover {
  color: #fff;
  background-color: #3473e6;
}
.condition_switch {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 48px;
  height: 30px;
  margin-top: 10px;
  color: #3473e6;
}
.condition_switch p{
  
}
.result {
  padding: 10px 0;
}
.result_header {
  width: 100%;
  height: 48px;
  padding: 0 20px;
  background: #f7f8f9;
  border-radius: 4px;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  align-items: center;
}
.result_header_item {
  color: #909399;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex: 420px;
}
.result_body {
  margin-top: 10px;
}
.result_body_item {
  padding: 0 20px;
  display: flex;
  margin-bottom: 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 80px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
}
.item_col {
  cursor: pointer;
  height: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;
}
.result_body_item:hover {
  color: #3473e6;
  border-color: #3473e6;
}
.item_col img {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}
.item_col:nth-child(1) {
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.el-pagination{
  display: flex;
  justify-content: center;
}
.item_col:nth-child(1),
.item_col:nth-child(2) {
  font-weight: 700;
  font-size: 16px;
}
</style>