<script lang="ts" setup>
import {userDataStore} from '@/store/users'
import {storeToRefs} from "pinia"
import TheUser from "@/components/TheUser.vue";
import TheSelect from '@/components/UI/TheSelect.vue'
import {computed, ref} from "vue";

const userData = userDataStore()
//computed
const {users} = storeToRefs(userData)
//props
//computed
const updateUsers = computed({
	get: () => {
		return users.value.filter((user) => {
			return (
					(!selectedCount.value || user.county > parseInt(selectedCount.value)) &&
					(!selectedTitle.value || user.title === selectedTitle.value)
			);
		});
	},
	set: (newValue) => {
		return newValue
	},
})

//data
let selectedCount = ref('')
let selectedTitle = ref('')
//useFetch
//onMounted
//methods
const optionSelected = (select: object) => {
	selectedCount.value = select.county
}

const optionSelectedTitle = (select: object) => {
	selectedTitle.value = select.title
}
let resetFilter = () => {
	updateUsers.value = users.value
}
</script>
<template>
	<div class="home">
		<div class="home__list container">
			<div class="homer__selected">
				<TheSelect :options="users" :selected="selectedCount" @select="optionSelected"/>
				<TheSelect :options="users" :selected="selectedTitle" @select="optionSelectedTitle"/>
			</div>
			<div class="home__user">
				<h2>List</h2>
				<TheUser v-for="(item,index) in updateUsers" :user="item" :key="index"/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vendor/_vars.scss";

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
			@include f-s(r-size(18px), 400)
		}
	}
}
</style>