<template>
  <div>
    <a-header></a-header>
    <a-banner></a-banner>

    <div class="container">
      <div class="row note-box">
        <div class="col-md-9">
          <div class="note-container">
            <div class="note-header">
              <p class="note-header--item">随笔：<span class="highlight">18423</span></p>
              <p class="note-header--item">本月：<span class="highlight">32</span></p>
              <p class="note-header--item">热门：<span class="highlight">service</span></p>
            </div>

            <div class="note-tag">
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--javascript"></i>javascript</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--javascript"></i>javascript</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--javascript"></i>javascript</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--javascript"></i>javascript</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--javascript"></i>javascript</a>

              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--nodejs"></i>nodejs</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--nodejs"></i>nodejs</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--nodejs"></i>nodejs</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--nodejs"></i>nodejs</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--nodejs"></i>nodejs</a>

              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--service"></i>service</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--service"></i>service</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--service"></i>service</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--service"></i>service</a>
              <a class="note-tag--item" href="javascript:void(0);"><i class="icon-tag icon--service"></i>service</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 note-asider">asider</div>
      </div>
    </div>
  </div>
</template>

<script>
  import AHeader from 'components/a-header/header'
  import ABanner from 'components/a-banner/banner'
  // import AFooter from 'components/a-footer/footer'
  export default {
    components: {
      AHeader,
      ABanner
      // AFooter
    }
  }
</script>

<style lang="less">
  @import './index.less';
</style>