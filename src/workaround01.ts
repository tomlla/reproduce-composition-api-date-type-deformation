import { reactive, ref, toRefs } from "@vue/composition-api";

interface T1 {
    date: Date
}
function print(date: Date) {
    console.log(date);
}

const reactiveObject = reactive<T1>({ date: new Date() });
const d = ref<Date>(reactiveObject.date);
print(d.value)