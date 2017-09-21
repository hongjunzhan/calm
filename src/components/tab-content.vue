<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange" class='tabs'>
    <mu-tab value="tab1" title="All"/>
    <mu-tab value="tab2" title="Prefer"/>
    <mu-tab value="tab3" title="Weex"/>
    <mu-tab value="tab4" title="Ask"/>
    <mu-tab value="tab5" title="Jobs"/>
  </mu-tabs>
  <mu-list>  	
  	<div class="article_list">
      <ul>
        <li class="title-list" v-for="i in list">
          <!--<time v-text="i.create_at"></time>   -->  
          <mu-avatar class="avatar" :src="i.author.avatar_url" :size="40"/>          
          <router-link :to="'/content/' + i.id" class='title' keep-alive>          				
            {{ i.title }}            		
          </router-link>
        </li>
      </ul>
   </div>  	
  </mu-list>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'all',
      list: [],
      page:1
    }
  	},
  created () {
			this.getData()
	},
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    getData(){
		this.$api.get('topics',null,r=>{
			this.list = r.data
			this.toggleLoading(false)
		})
	},
  }
}

</script>
<style>
/*.tab-content{padding-top: 110px;}*/
.tabs{position: fixed;top: 0;margin-top: 56px;}
.article_list{font-size: 0.2rem;padding: 110px 10px 0;background: dimgrey;}
.title-list{display: flex;align-items: center;}
.avatar{flex: none;}
.title{color: white;text-align: left;}
</style>