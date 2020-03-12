import { reactive } from "@vue/composition-api";

interface T1 {
    date: Date
}
function print(date: Date) {
    console.log(date);
}

const reactiveObject = reactive<T1>({ date: new Date() });
const pureObject: T1 = { date: new Date() };

print(reactiveObject.date)
print(pureObject.date)