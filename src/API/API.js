import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https:// ... /api/',
});

export const userAPI = {
    getUsers() {
        return instance.get(`users`)
            .then(response => {
                return response.data});},

    addUser(data) {
        return instance.post(`users`, data)
            .then(response => {
                return response.data});},

    updateUser(id) {
        return instance.put(`users/${id}`, {})
            .then(response => {
                return response.data});},

    deleteUser(id) {
        return instance.delete(`users/${id}`)
        .then(response => {
            return response.data});},

    getDeletedUsers(){
        return instance.get(`users/deleted`)            //doesn`t exist yet
        .then(response => {
            return response.data});},
}

export const ticketAPI = {
    getTickets() {
        return instance.get(`tickets`)
            .then(response => {
                return response.data});},

    addTicket() {
        return instance.post(`tickets`, {})
            .then(response => {
                return response.data});},

    updateTicket(id) {
        return instance.put(`tickets/${id}`, {})
            .then(response => {
                return response.data});},

    deleteTicket(id) {
        return instance.delete(`tickets/${id}`)
            .then(response => {
                return response.data});},

    getDeletedTickets() {
        return instance.get(`tickets/deleted`)          //doesn`t exist yet
            .then(response => {
                return response.data});},

    assignToUser(userId, ticketId) {
        return instance.post(`tickets/`)            //????????????
            .then(response => {
                return response.data});}
} 