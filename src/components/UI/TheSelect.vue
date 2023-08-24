<script lang="ts" setup>
import {toRefs, ref, onMounted} from "vue";

const props = defineProps({
		options: {
			type: [String, Array]
		},
		selected: {
			type: String
		}
})
const {options,selected} = toRefs(props)

//props
//computed

//data
let optionVisible = ref(false)
//useFetch
//onMounted
onMounted(() =>{
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.selected')) {
			optionVisible.value = false
		}
	})
})
const emmit = defineEmits(['select'])
//methods
const selectOption = (country: any) =>{
	emmit('select',country)
	optionVisible.value = !optionVisible.value
}
</script>
<template>
	<div class='selected'>
		<p @click='optionVisible = !optionVisible' :class='{selected_active: optionVisible}'>{{ selected }}<span class="selected__placeholder" v-if="!selected">Выберите фильтр</span></p>
		<transition name='slide-fade-route'>
			<div class='selected__options' v-if='optionVisible'>
      <span v-for='(country,index) in options' :key='index' @click='selectOption(country)'>
        {{ country.title }}
        {{ country.county }}
      </span>
			</div>
		</transition>
	</div>
</template>

<style lang='scss' scoped>
.selected {
  position: relative;
  width: 100%;
  height: 54px;
  border: 1px solid #EBEBEB;
  display: flex;
  justify-content: center;
  align-items: center;
	margin-bottom: 12px;

  p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 54px;
    position: relative;
    cursor: pointer;
    margin-right: -10px;

    &:before {
      content: '';
      position: absolute;
      top: 22px;
	    right: 20px;
      width: 8px;
      height: 10px;
      background: url("@/assets/img/icons/arrow.svg") no-repeat center center;
      background-size: cover;
      transform: rotate(270deg);
      transition: .3s;
    }
  }
	&__placeholder{
		position: absolute;
	}

  &__options {
    position: absolute;
    top: 60px;
	  right: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 154px;
    background-color: #ffffff;
	  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	  z-index: 10;
    overflow-y: hidden;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    &::-webkit-scrollbar-thumb {
      width: 0px;
    }

    span {
      cursor: pointer;
      color: #7c7c7c;
      transition: .3s;
      line-height: 28px;

      &:hover {
        color: #000000;
      }
    }
  }

  &_active {
    &:before {
      transition: .3s;
      transform: rotate(90deg) !important;
    }
  }
}
</style>
