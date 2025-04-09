<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { getMedical_API, type MedicalModel } from "~/services/medical";
const modules = [Navigation, Pagination, Autoplay];
const _items = ref<MedicalModel[]>([]);

async function getMedical() {
	const [err, res] = await getMedical_API(0);
	if (err) return;
	_items.value = res.results;
}
getMedical();
</script>

<template>
	<div class="container !mb-40">
		<h1 class="text-[42px] max-sm:text-3xl font-montserrat-600">
			Mavsumiy dorilar
		</h1>
		<div>
			<Swiper
				:modules="modules"
				:navigation="true"
				class="mySwiper !py-10 !px-10 max-sm:!px-0"
				:spaceBetween="20"
				:pagination="{
					clickable: true,
				}"
				:autoplay="{
					delay: 3000,
					disableOnInteraction: false,
				}"
				:breakpoints="{
					'950': {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					'650': {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					'530': {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					'370': {
						slidesPerView: 1.5,
						spaceBetween: 15,
					},
				}"
			>
				<SwiperSlide
					@click="navigateTo('/medicines/' + item.id)"
					v-for="item in _items"
					:key="item.id"
				>
					<div
						class="rounded-xl bg-white cursor-default border border-black/20 p-5 transition-all hover:shadow-2xl hover:scale-[1.02]"
					>
						<img class="h-24 mx-auto" :src="item.image" />
						<p class="mt-4 line-clamp-2 h-12 font-montserrat-500">
							{{ item.name }}
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>
<style lang="scss">
.swiper-button-prev {
	border-radius: 100%;
	background: #fff;
	-webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	width: 28px;
	height: 28px;
	left: 13px !important;
	z-index: 999999;
	&::after {
		font-size: 12px;
		font-weight: 900;
		color: gray !important;
	}
	@media (max-width: 500px) {
		display: none;
	}
}
.swiper-button-next {
	position: absolute;
	z-index: 999999;

	border-radius: 100%;
	background: #fff;
	width: 28px;
	height: 28px;
	-webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	right: 13px !important;

	&::after {
		font-size: 12px;
		font-weight: 900;
		color: gray !important;
	}
   @media (max-width: 500px) {
		display: none;
	}
}
</style>
