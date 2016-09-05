<template>
  <div>
    <a-header></a-header>
    <a-banner></a-banner>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="news-title">网络红人馆</h1>
          <h2 class="news-subtitle">这里收集的都是一些网络红词对应的网红</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="item in list" class="col-xs-12 col-sm-6 col-md-4">
          <div class="news-container">
            <div class="news-item" :style="item.style">
            <div class="news-mask"></div>
              <div class="news-item-box">
                <h3>{{ item.name }}</h3>
                <p>{{{ item.content }}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row notes">
        <div class="col-sm-12 col-md-12">
          <ul>
            <li class="note-item">
              <a href="http://www.unclay.com/note/fe-analysis-data">
                <h4 class="title" data-url="">前端调优-数据之美</h4>
                <p class="content">前端如何网页调优呢，其实我也是不知道的。。。。。<br>刚看了篇文章，前端数据之美 -- 基础篇，里面提到了如何收集性能和网页异常消息，<br>我们可以通过分析前端数据来提高前端页面性能及其健壮性</p>
              </a>
            </li>

            <li class="note-item">
              <a href="http://www.ruanyifeng.com/blog/2010/11/61_things_every_web_developer_should_know.html">
                <h4 class="title" data-url="http://www.ruanyifeng.com/blog/2010/11/61_things_every_web_developer_should_know.html">网站开发人员应该知道的61件事</h4>
                <p class="content">有人在Stack Overflow上发问，动手开发网站之前，需要知道哪些事情？<br>不出意料地，他得到了一大堆回答。<br>通常情况下，你需要把所有人的发言从头到尾读一遍。但是，Stack Overflow有一个很贴心的设计，它允许在问题下方开设一个wiki区，让所有人共同编辑一个最佳答案。于是，就有了下面这篇文章，一共总结出六个方面共计61条"网站开发须知"。</p>
              </a>
            </li>

            <li class="note-item">
              <h4 class="title" data-url="http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html">MVC，MVP 和 MVVM 的图示</h4>
              <p class="content">复杂的软件必须有清晰合理的架构，否则无法开发和维护。<br>MVC（Model-View-Controller）是最常见的软件架构之一，业界有着广泛应用。它本身很容易理解，但是要讲清楚，它与衍生的 MVP 和 MVVM 架构的区别就不容易了。</p>
            </li>

            <li class="note-item">
              <h4 class="title" data-url="http://www.ruanyifeng.com/blog/2016/01/website-obesity-crisis.html">网站的肥胖症危机</h4>
              <p class="content">最近，有一篇文章正在疯传。<br>它是上个月，Maciej Ceglowski在澳大利亚的一次演讲，名为《网站的肥胖症危机》（文本，视频），反思了互联网开发的现状。<br>该文非常值得一读，Hacker News排行榜高居榜首，得到了1000多人的推荐。</p>
            </li>

            <li class="note-item">
              <h4 class="title" data-url="http://www.ruanyifeng.com/blog/2009/10/5_ways_to_search_for_files_using_the_terminal.html">Linux的五个查找命令</h4>
              <p class="content">最近，我在学习Linux，下面是一些笔记。<br>使用电脑的时候，经常需要查找文件。<br>在Linux中，有很多方法可以做到这一点。国外网站LinuxHaxor总结了五条命令，你可以看看自己知道几条。大多数程序员，可能经常使用其中的2到3条，对这5条命令都很熟悉的人应该是不多的。</p>
            </li>
            
          </ul>
          
        </div>
        <div class=" jiao col-md-4 col-md-4" style="display: none;">
          <h5>分类</h5>
          <ul>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">HTML5</a></li>
            <li><a href="#">CSS3</a></li>
            <li><a href="#">EMScript 2015</a></li>
            <li><a href="#">Wechat</a></li>
            <li><a href="#">Nodejs</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <a-footer></a-footer>
  </div>
</template>

<script>
  import AHeader from './components/a-header/header'
  import ABanner from './components/a-banner/banner'
  import AFooter from './components/a-footer/footer'
  export default {
    components: {
      AHeader,
      ABanner,
      AFooter
    },
    data: function () {
      return {
        list: [{
          name: '王健林',
          content: '先定一个小目标，比如先赚个一个亿',
          style: {
            'background-image': 'url(/static/img/wangjianlin.f7a8e58.jpg)'
          }
        },
        {
          name: '傅园慧',
          content: '我已经，我已经用了洪荒之力了!<br>鬼知道我经历了什么',
          style: {
            'background-image': 'url(http://img5.imgtn.bdimg.com/it/u=2879435211,2414070264&fm=11&gp=0.jpg)'
          }
        },
        {
          name: '马云',
          content: '年轻时还投履历到肯德基<br>只有1个没上，那个人就是我！',
          style: {
            'background-image': 'url(http://news.youth.cn/kj/201609/W020160904286364324337.jpg)'
          }
        },
        {
          name: '奥姆兰',
          es: '（Omran Daqneesh）',
          content: '没有哭泣，也没有声音',
          style: {
            'background-image': 'url(http://cms-bucket.nosdn.127.net/catchpic/A/A0/A04823891707649D5FD6BC01383EF4F1.jpg)'
          }
        },
        {
          name: '《慎点》',
          content: '都市怪谈剧',
          style: {
            'background-image': 'url(http://cms-bucket.nosdn.127.net/af74e1c06ba248a3b6b9fc450d5c0c9920160831103124.jpeg?imageView&thumbnail=550x0)'
          }
        },
        {
          name: '向右跨步',
          content: '只有男人才知道的那一步',
          style: {
            'background-image': 'url(http://img1.imgtn.bdimg.com/it/u=1415162159,467174918&fm=21&gp=0.jpg.jpg)'
          }
        }]
      }
    }
  }
</script>

<style lang="less">
  .wangjianlin {
    background-image: url(./assets/wangjianlin.jpg);
  }
  .jiao {
    background-image: url(./assets/jiao.jpg);
  }
  .news-title {
    text-align: center;
    color: #444;
    font-size: 2em;
    font-weight: 600;
    margin: 35px 0 15px;
  }
  .news-subtitle {
    text-align: center;
    color: #9c9c9c;
    font-size: 1.2em;
    margin: 0 0 35px 0;
    font-weight: normal;
  }
  .news-container {
    position: relative;
    margin-bottom: 30px;
    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
    .news-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.3);
      z-index: 1;
    }
    .news-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      .news-item-box {
        position: relative;
        z-index: 2;
        color: #fff;
        text-align: center;
      }
    }
  }

  .notes {
    .note-item {
      margin-top: 20px;
      .title {
        line-height: 2;
        border-bottom: 1px solid #e2e4e6;
      }
      .content {
        line-height: 1.6;
      }
    }
  }
</style>