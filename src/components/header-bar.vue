<template>
	<div>
		<mu-appbar title="Calm" style='text-align: left;' class="header-bar">
  			<mu-icon-button icon="subject" slot="left" @click="toggle(true)"/>
  			<mu-flat-button label="Publish" slot="right"/>
  			<mu-icon-button icon="brush" slot="right"/>
		</mu-appbar>
		<mu-drawer :open="open" :docked="docked" @close="toggle()">
      		<mu-list @itemClick="docked ? '' : toggle()">   				
  				<mu-avatar src="" :size="55"/> 
  				<mu-content-block class='login-click'>
 					login your Vue account
  				</mu-content-block>  				
  				<mu-divider />
      			<mu-list-item title="Home">
      				<mu-icon slot="left" value="home"/>
      			</mu-list-item>
        		<mu-list-item title="Picturn">
      				<mu-icon slot="left" value="photo"/>
      			</mu-list-item>
      			<mu-divider/>
      			<mu-list-item disableRipple @click="handleToggle('events')" title="Night">
        			<mu-icon slot="left" value="flare"/>
        			<mu-switch v-model="events"  slot="right"/>
     			</mu-list-item>
     			<mu-list-item disableRipple @click="handleToggle('events')" title="Radio">
        			<mu-icon slot="left" value="radio"/>
        			<mu-switch v-model="events"  slot="right"/>
     			</mu-list-item>
        		<mu-list-item title="Download">
      				<mu-icon slot="left" value="archive"/>
      			</mu-list-item>
        		<mu-list-item title="About">
      				<mu-icon slot="left" value="comment"/>
      			</mu-list-item>
        		
      		</mu-list>
    	</mu-drawer>
	</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>
<style>
	/*.mu-appbar-title{padding-left:0;}*/
	.mu-paper{background: #474A4F;}
	.mu-item-title{color: white;text-align: left;}
	.login-click{color: lightblue;font-size: .34rem;text-align: left;padding-bottom: .5rem;}
	.mu-item-wrapper{padding: 8px 0;}
	.mu-avatar{display:block;text-align: left;margin: 15px;}
	.header-bar{position: fixed;top: 0;}
</style>
