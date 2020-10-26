import { reactive, toRefs } from 'vue';

const state = reactive({
    lists: [
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
})

const addItemToList = (item, listName) => {
    let i = state.lists.findIndex(l => l.name === listName)
    state.lists[i].items.push(item)
}

export default function store() {
    return {
        ...toRefs(state),
        addItemToList,
    }
}