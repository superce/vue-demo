<template>
  <div class="headerDtail">
		<div class="logo">
			<h1>132</h1>
		</div>
  </div>
</template>

<script>
export default {
	name: 'HeaderDtail',
}
</script>

<style scoped>
	.headerDtail{
		width:100%;		
		height: 40px;
		box-shadow: 1px 0 1px #ccc;
	}
	.headerDtail .logo{
		width: 100%;
		text-align: center;
	}
	.headerDtail .logo h1{
		font-size: 30px;
		line-height: 40px;
	}
</style>
