<script lang="ts" setup>
import {userDataStore} from '@/store/users'
import {storeToRefs} from "pinia"
import TheUser from "@/components/TheUser.vue";
import TheSelect from '@/components/UI/TheSelect.vue'
import {computed, ref} from "vue";

const userData = userDataStore()
//computed
const {users, country, quantity} = storeToRefs(userData)
//props
//computed
const updateUsers = computed({
	get: () => {
		return users.value.filter((user) => {
			return (
					(!selectedCount.value || user.location.country === selectedCount.value) &&
					(!selectedQuantity.value || user.quantity === parseInt(selectedQuantity.value))
			);
		});
	},
	set: (newValue) => {
		return newValue
	},
})

//data
let selectedCount = ref('')
let selectedQuantity = ref('')
//useFetch
//onMounted
//methods
const optionSelected = (select: object) => {
	selectedCount.value = select.country
}

const optionSelectedTitle = (select: object) => {
	selectedQuantity.value = select.quantity
}
const resetFilter = () =>{
	selectedCount.value = ''
	selectedQuantity.value = ''
}
</script>
<template>
	<div class="home">
		<div class="home__list container">
			<div class="homer__selected">
				<TheSelect :options="country" :selected="selectedCount" @select="optionSelected"/>
				<TheSelect :options="quantity" :selected="selectedQuantity" @select="optionSelectedTitle"/>
				<button class="home__button" @click="resetFilter">Сбросить фильтры</button>
			</div>
			<div class="home__user">
				<h2>Список пользователей</h2>
				<div class="home__users" v-if="updateUsers.length">
					<TheUser v-for="(item,index) in updateUsers" :user="item" :key="index"/>
				</div>
				<div class="home__empty" v-else>
					<h2>Упс... Увы ничего не найдено:(</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
	}

	&__user {
		display: flex;
		flex-direction: column;
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
		padding: 20px;

		h2 {
			@include f-s(r-size(24px), 400)
		}
	}
	&__button{
		margin-top: 20px;
		width: 100%;
		height: 40px;
		background-color: $gray;
		color: #ffff;
		cursor: pointer;
	}

	&__empty {
		margin-top: 20px;
	}
}
</style>