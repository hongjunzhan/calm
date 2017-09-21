<template>	
	<div class="tab-content" v-if="activeTab === 'tab1'">
    <div class="article_list" >
      		<ul>
        		<li v-for="i in list">
          			<!--<time v-text="i.create_at"></time>   -->      		
          			<img class="avatar" :src='i.author.avatar_url' alt="" /> 
          			<router-link :to="'/content/' + i.id" keep-alive>          				
            			{{ i.title }}            		
          			</router-link>
        		</li>
      		</ul>
    </div> 
    </div>
</template>
<script>

export default {

  data () {
    return {
      activeTab: 'tab1',
      list: []
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
