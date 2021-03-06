import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8765/api/',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    },
    
});

export const userAPI = {
    getUsers() {
        return instance.get(`users`)
            .then(response => {
                return response.data})},

    addUser(data) {
        return instance.post(`users`, {name: data})
            .then(response => {
                return response.data});},

    updateUser(user) {
        return instance.put(`users`, user)
            .then(response => {
                return response.data});},

    deleteUser(id) {
        return instance.delete(`users?id=${id}`)
        .then(response => {
            return response.data});},
    
    moveToTrash(id) {
        return instance.post(`users/moveToTrash/${id}`,{})
            .then(response => {
                return response.data});},

    getDeletedUsers(){
        return instance.get(`users/allInTrash`)    
        .then(response => {
            return response.data});},

    restoreFromRecycleBin(id) {
        return instance.post(`users/restore/${id}`,{})
            .then(response => {
                return response.data});},
    getUserByTicketId(ticketId) {
        return instance.get(`users/byTicketId/${ticketId}`)
            .then(responce => {
                return responce.data});},
}

export const ticketAPI = {
    getTickets() {
        return instance.get(`tickets`)
            .then(response => {
                return response.data});},

    addTicket(data) {
        return instance.post(`tickets`, {title: data})
            .then(response => {
                return response.data});},

    updateTicket(ticket) {
        return instance.put(`tickets`, ticket)
            .then(response => {
                return response.data});},

    deleteTicket(id) {
        return instance.delete(`tickets/${id}`)
            .then(response => {
                return response.data});},

    getDeletedTickets() {
        return instance.get(`tickets/allInTrash`) 
            .then(response => {
                return response.data});},

    moveToTrash(id) {
        return instance.post(`tickets/moveToTrash/${id}`,{})
            .then(response => {
                return response.data});},

    restoreFromRecycleBin(id) {
        return instance.post(`tickets/restore/${id}`,{})
            .then(response => {
                return response.data});},

    assignToUser(userId, ticketId) {
        return instance.post(`tickets/assign?ticketId=${ticketId}&toUserId=${userId}`) 
            .then(response => {
                return response.data});},
    
    unassignFromUser(id) {
        return instance.post(`tickets/unassign/${id}`) 
            .then(response => {
                return response.data});},
} 
