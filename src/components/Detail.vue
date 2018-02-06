<template>
  <div class="detail">
		<detailHeader />
    <detailMain />
  </div>
</template>

<script>
import DetailHeader from '@/components/DetailHeader'
import DetailMain from '@/components/DetailMain'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailMain
  }
}
</script>

<style scoped>
	
</style>
