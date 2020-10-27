import { reactive, toRefs } from 'vue';
import { v4 as uuidv4 } from 'uuid';

let lists = JSON.parse(window.localStorage.getItem('lists'))
if (!lists) {
    lists = [
        {
            id: uuidv4(),
            name: 'Backlog',
            position: {top: '0px', left: '0px'},
            items: [
                { id: uuidv4(), name: 'Clean garage' },
                { id: uuidv4(), name: 'Install new lights' },
            ],
        },
        {
            id: uuidv4(),
            name: 'In Progress',
            position: {top: '200px', left: '0px'},
            items: [
                { id: uuidv4(), name: 'Hacktoberfest' },
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

const resetAll = () => {
    window.localStorage.removeItem('lists')
    window.location.reload()
}

//
// Lists
//

const addList = (listName) => {
    state.lists.push({
        id: uuidv4(),
        name: listName,
        position: {top: '0px', left: '100px'},
        items: [],
    })
    saveToLocalStorage()
}

const removeList = (listId) => {
    let i = state.lists.findIndex(l => l.id === listId)
    state.lists.splice(i, 1)
    saveToLocalStorage()
}

const updateList = (listId, key, value) => {
    let i = state.lists.findIndex(l => l.id === listId)
    state.lists[i][key] = value
    saveToLocalStorage()
}

//
// Items
//

const addItemToList = (listId, itemName) => {
    let i = state.lists.findIndex(l => l.id === listId)
    state.lists[i].items.push({
        id: uuidv4(),
        name: itemName,
    })
    saveToLocalStorage()
}

const updateItem = (listId, itemId, key, value) => {
    let i = state.lists.findIndex(l => l.id === listId)
    let j = state.lists[i].items.findIndex(item => item.id === itemId)
    state.lists[i].items[j][key] = value
    saveToLocalStorage()
}

const removeItem = (listId, itemId) => {
    let i = state.lists.findIndex(l => l.id === listId)
    let j = state.lists[i].items.findIndex(item => item.id === itemId)
    state.lists[i].items.splice(j, 1)
    saveToLocalStorage()
}

export default function store() {
    return {
        ...toRefs(state),
        addList,
        removeList,
        updateList,

        addItemToList,
        removeItem,
        updateItem,

        resetAll,
    }
}