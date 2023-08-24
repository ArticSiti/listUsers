<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps({
	cardContent: {
		type: Object
	}
})
const {cardContent} = toRefs(props)
const emmit = defineEmits(['close'])
// methods
const closeOverlay = () => {
	emmit('close')
}
</script>
<template>
	<div class="pop-up">
		<div class="pop-up__wrapper" @click="closeOverlay">
			<div class="pop-up__item">
				<h2>Страна: {{ cardContent.country }}</h2>
			</div>
			<div class="pop-up__item">
				<p>Улица проживания: {{cardContent.address}}</p>
			</div>
			<div class="pop-up__image">
				<img :src="cardContent.image" alt="">
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vendor/_vars.scss";
.pop-up {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	z-index: 20;

	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(#000, .4);
	}

	&__wrapper {
		width: 400px;
		height: auto;
		overflow: hidden;
		padding: 40px;
		top: 20%;
		background-color: #ffffff;
		position: absolute;
		z-index: 21;
	}
	&__item{
		h2{
			@include f-s(r-size(24px),500)
		}
		p{
			@include f-s(r-size(18px),500)
		}
	}
	&__image{
		width: auto;
		height: 300px;
		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>