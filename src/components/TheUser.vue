<script lang="ts" setup>
//props
import {toRefs, ref, onMounted} from "vue";
import ThePopUp from "@/components/UI/ThePopUp.vue";

const props = defineProps({
	user: {
		type: Object,
		required: true,
	}
})
const {user} = toRefs(props)
//computed

//data
let cardActive = ref(false)
let cardContent = ref({})
// methods
//useFetch
//onMounted
onMounted(() => {
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.card__preview')) {
			cardActive.value = false
		}
	})
})
//methods
const detailCard = (content: object) => {
	cardActive.value = true
	cardContent.value = content
	document.querySelector('body').classList.toggle('hidden')
}
const closeCard = () => {
	cardActive.value = false
	document.querySelector('body').classList.remove('hidden')
}
</script>
<template>
	<div class="card">
		<div class="card__preview" @click="detailCard(user.location)">
			<img :src="user.avatar" alt="">
			<span>{{ user.county }}</span>
		</div>
		<transition name="fade">
			<ThePopUp class="pop-up" :card-content="cardContent" v-show="cardActive" @close="closeCard"/>
		</transition>
		<div class="card__description">
			<h2>{{ user.title }}</h2>
			<div class="card__reviews">
				<p>{{ user.name }} <span>--{{ user.reviews }}</span></p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vendor/_vars.scss";

.card {
	display: grid;
	grid-template-columns: 50px 1fr;
	margin-top: 16px;
	cursor: pointer;

	&__preview {
		width: 50px;
		height: 50px;

		img {
			width: 100%;
			height: 100%;
			border-radius: 100%;
			object-fit: cover;
		}
	}

	&__description {
		text-align: left;
		padding: 0 12px 12px 12px;
		border-bottom: 1px solid $gray;

		h2 {
			@include f-s(r-size(18px), 400);
			padding-bottom: 8px;
		}

		p, span {
			@include f-s(r-size(16px), 400)
		}

		span {
			color: $gray;
		}
	}
}
</style>