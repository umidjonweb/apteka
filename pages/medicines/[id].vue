<script lang="ts" setup>
const route = useRoute();
import {
	getMedicalSingle_API,
	type MedicalModel,
	getMedical_DEFAULT,
} from "~/services/medical";

const _item = ref<MedicalModel>(getMedical_DEFAULT());

async function getMedicalSingle() {
	const [err, res] = await getMedicalSingle_API(+route.params.id);
	if (err) return;
	_item.value = res;
}
getMedicalSingle();
</script>

<template>
	<div class="py-16">
		<div class="container">
			<div class="grid grid-cols-3 gap-8 items-start">
				<div
					class="col-span-1 max-sm:col-span-3 bg-white p-6 max-sm:p-3 border border-gray/90 rounded-3xl"
				>
					<img
						class="max-sm:h-60 mx-auto max-[420px]:h-48"
						:src="_item.image"
						alt=""
					/>
				</div>
				<div class="col-span-2 max-sm:col-span-3">
					<h1 class="text-3xl max-sm:text-2xl font-montserrat-600 mb-4">
						{{ _item.name }}
					</h1>
					<div class="flex gap-1 rounded-3xl bg-secondary px-2 w-min mb-4">
						<p class="text-white font-montserrat-500">
							{{ $t("price") }}:
						</p>
						<p class="text-white font-montserrat-500">
							{{ _item.price }}
						</p>
					</div>
					<p v-html="_item.content"></p>

					<p v-html="_item.description"></p>
				</div>
			</div>
		</div>
	</div>
</template>
