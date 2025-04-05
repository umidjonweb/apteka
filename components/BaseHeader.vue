<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
// import TheModal from "./HomeModal.vue";
import { _lang } from "@/i18n";
import { NuxtLink } from "#components";
const { locale } = useI18n();

const _openMenu = ref(false);
const Router = useRouter();
const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});

const _langOptions = ref([
	{
		name: "Uzb",
		value: "uz",
	},
	{
		name: "Рус",
		value: "ru",
	},
]);

function handleLanguage() {
	locale.value = _lang.value;
}
watch(
	() => Router,
	() => (_openMenu.value = false),
	{ deep: true }
);
</script>

<template>
	<header
		class="sticky z-10 top-5 max-sm:top-0"
		:class="{
			'scrolled border bg-white/60 shadow-header backdrop-blur border-white':
				isScrolled,
		}"
	>
		<!-- <TheModal ref="_headerRef" /> -->

		<div
			class="container rounded-xl border bg-white/60 shadow-header backdrop-blur transition-300 border-white px-5 max-sm:px-4 max-sm:py-2 !py-2 flex justify-between items-center max-lg:relative"
		>
			<div class="flex gap-4">
				<NuxtLink to="/" class="text-2xl font-montserrat-600 py-1.5">Apteka.uz</NuxtLink>
			</div>
			<div class="flex gap-6 max-md:gap-4 items-center max-sm:gap-2">
				<div
					class="flex gap-3 max-md:absolute max-md:flex-col z-[999999] max-md:p-9 max-md:w-[244px] open_menu max-md:top-[-350px] max-md:!z-99 max-md:transition-all max-md:bg-white"
					:class="_openMenu && '!top-20'"
				>
					<img
						@click="_openMenu = false"
						class="hidden max-md:block cursor-pointer absolute right-5 top-5"
						src="@/assets/img/menuClose.svg"
						alt=""
					/>
					<h2 class="font-inter-500 cursor-pointer sm:hidden">
						+99897 308-19-81
					</h2>
					<a @click="$router.push('/')" class="font-inter-500">
						{{ $t("home") }}</a
					>
					<a
						@click="$router.push('/#aboutUs')"
						href="#aboutUs"
						class="text- font-inter-500"
					>
						{{ $t("aboutUs") }}</a
					>

					<a @click="$router.push('/#connection')" href="#connection">
						<button
							class="max-[600px]:inline hidden border border-primary/70 px-4 py-1 text-white bg-primary"
						>
							{{ $t("connection") }}
						</button>
					</a>
				</div>
				<h2 class="font-inter-600 cursor-pointer max-sm:hidden">
					+99897 308-19-81
				</h2>
				<el-select
					@change="handleLanguage"
					v-model="_lang"
					class="!rounded-3xl"
					placeholder="Select"
					size="large"
					style="width: 86px"
				>
					<el-option
						v-for="item in _langOptions"
						:key="item.value"
						:label="item.name"
						:value="item.value"
					/>
				</el-select>
				<button
					class="border-2 text-green bg-white text-sm hover:bg-green transition-all hover:text-white border-green py-2 rounded-3xl px-3 max-[600px]:hidden font-inter-500 max-md:px-4 max-md:py-2 max-[500px]:hidden inline"
				>
					{{ $t("Biz bilan bog'lanish") }}
				</button>
				<!-- <a @click="$router.push('/#connection')" href="#connection">
					<button class="max-[600px]:inline hidden border border-danger/70 rounded-full w-10 h-10 p-1.5 bg-danger"
					>
						<img class="w-6 h-6" src="@/assets/img/phone.svg" alt="" />
					</button>
				</a> -->
				<img
					@click="_openMenu = true"
					class="hidden max-md:block cursor-pointer"
					src="@/assets/img/menuOpen.svg"
					alt=""
				/>
			</div>
		</div>
	</header>
</template>
<style lang="scss">
header {
	transition: background 0.6s ease;
	transition: top 0.6s ease;
}

header.scrolled {
	top: 0px;
	// background-color: rgb(255 255 255 / 0.6);
	border-radius: 0px 0px 12px 12px;

	.container {
		border-radius: 0px;
		background: none;
		border: 0;
		backdrop-filter: none;
		// max-width: 100%;
	}
}
.shadow-header {
	--tw-shadow: 0 20px 64px 0 rgba(0, 0, 0, 0.04);
	--tw-shadow-colored: 0 20px 64px 0 var(--tw-shadow-color);
	box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 64px #0000000a;
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
		var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
i {
	color: red;
}

.el-select--large .el-select__wrapper {
	border-radius: 20px;
	color: white !important;
	background: #20a512;
	// width: 100px !important;
}
.el-select__placeholder span,
.el-select__placeholder {
	color: #fff !important;
}
header .el-select__placeholder,
.el-select__caret {
	color: #fff !important;
}

@media (max-width: 1100px) {
	.open_menu {
		box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
		border-radius: 0px 20px;
		left: 50%;
		transform: translate(-50%);
	}
}
</style>
