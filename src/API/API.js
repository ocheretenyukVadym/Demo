import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://192.168.50.245:8765/api/',
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
        return instance.delete(`users/${id}`)
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
        return instance.put(`tickets/${ticket.id}`, ticket)
            .then(response => {
                return response.data});},

    deleteTicket(id) {
        return instance.delete(`tickets/moveToTrash/${id}`)
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

    assignToUser(userId, ticketId) {
        return instance.post(`tickets/assign?ticketId=${ticketId}&toUserId=${userId}`) 
            .then(response => {
                return response.data});}
} 