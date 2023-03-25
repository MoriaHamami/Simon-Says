export const userService = {
    getUserId
}

const STORAGE_KEY = 'userId'

function getUserId() {
    let userId = _loadFromStorage(STORAGE_KEY)
    if(!userId) {
        userId = _addUser()
    }
    console.log('userservice: userId', userId)
    return userId
}

function _addUser() {
    const userId = _makeId()
    _saveToStorage(STORAGE_KEY, userId)
    return userId
}

function _makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function _saveToStorage(key: string, value: string) {
    // if(typeof localStorage === 'undefined') return
    localStorage.setItem(key, JSON.stringify(value))
}

function _loadFromStorage(key: string) {
    // if(typeof localStorage === 'undefined') return
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}