import { reactive, toRefs } from 'vue';

let lists = JSON.parse(window.localStorage.getItem('lists'))
if (!lists) {
    lists = [
        {
            name: 'Backlog',
            items: [
                { name: 'Clean garage' },
                { name: 'Install new lights' },
            ],
        },
        {
            name: 'In Progress',
            items: [
                { name: 'Hacktoberfest' },
            ],
        }
    ]
}

const state = reactive({
    lists,
})

const saveToLocalStorage = () => {
    window.localStorage.setItem('lists', JSON.stringify(state.lists))
}

const addItemToList = (item, listName) => {
    let i = state.lists.findIndex(l => l.name === listName)
    state.lists[i].items.push(item)
    saveToLocalStorage()
}

export default function store() {
    return {
        ...toRefs(state),
        addItemToList,
    }
}