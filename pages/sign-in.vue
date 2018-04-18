<template>
  <div class="sign">
      <!-- logo -->
      <div class="logo">
          <nuxt-link to>
              <img src="~/assets/img/logo.png">
          </nuxt-link>
      </div>
      <div class="main">
          <!-- title -->
          <div class="title">
              <h4>
                  <nuxt-link class="active" to="/sign-in">
                    登陆
                  </nuxt-link>
                    ·
                  <nuxt-link to="/sign-up">
                    注册
                  </nuxt-link>

              </h4>
          </div>
          <!-- form表单 -->
          <div class="js-form">
              <form method="post">
                    <input type="text" class="input-prepend" placeholder="手机号或邮箱">
                    <i class="fa fa-user"></i>
                    <input type="text" class="input-prepend" placeholder="密码">
                    <i class="fa fa-lock"></i>
                    <input type="checkbox">
                    <span>记住我</span>
                    <nuxt-link class="help" to="/">登陆遇到问题?</nuxt-link>
                    <input type="button" class="btn btn-primary" value="登陆">
              </form>
          </div>
          <!-- 第三方的登陆 -->
          <div class="more-sign">
              <p class="">社交账号登陆</p>
              <ul>
                  <li>
                      <nuxt-link to="/">
                        <i class="fa fa-weixin"></i>
                      </nuxt-link>
                  </li>
                  <li>
                      <nuxt-link to="/">
                        <i class="fa fa-weibo"></i>
                      </nuxt-link>
                  </li>
                  <li>
                      <nuxt-link to="/">
                        <i class="fa fa-qq"></i>
                      </nuxt-link>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  // 修改当前页面的默认模板为sign.vue
  // 如果不写的话，默认是default.vue
  layout: "sign",
  // 设置页面的标题以及描述，关键字等元信息
  head: {
    title: "登陆-简书",
    meta: [
      { name: "keywords", content: "登陆页面" },
      { name: "description", content: "登陆简书" },
      { name: "author", content: "胡胜州" }
    ]
  },
  data() {
    return {};
  }
};
</script>

