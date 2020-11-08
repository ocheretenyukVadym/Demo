import { action, makeObservable, observable } from 'mobx';
import { ticketAPI, userAPI } from '../../API/API';

export class Store{
    users = [];
    tickets = [];

    deletedUsers = [];
    deletedTickets = [];

    isFetching = true;

    newTicketValue = '';

    constructor() {
        makeObservable(this, {
            users: observable,
            tickets: observable,
            deletedUsers: observable,
            deletedTickets: observable,
            isFetching: observable,
            newTicketValue: observable,
            setUserValue: action,
            setTicketValue: action,
            setUsers: action,
            setTickets: action,
            setDeletedUsers: action,
            setDeletedTickets: action,
            getUsers: action,
            createNewUser: action,
            updateUser: action,
            deleteUser: action,
            getDeletedUsers: action,
            getTickets: action,
            createNewTicket: action,
            updateTicket: action,
            deleteTicket: action,
            getDeletedTickets: action,
            assignToUser: action,
            moveToTrash: action,
            restoreUserFromRecycleBin: action,
            unassignFromUser: action,
            restoreTicketFromRecycleBin: action,
            moveToTrashTicket: action,
        })
    }

    setUserValue = newValue => this.newUserValue = newValue;

    setTicketValue = newValue => this.newTicketValue = newValue;

    setUsers = users => this.users = users;

    setTickets = tickets => this.tickets = tickets;

    setDeletedUsers = deletedUsers => this.deletedUsers = deletedUsers;

    setDeletedTickets = deletedTickets => this.deletedTickets = deletedTickets;

    getUsers = () => {
        this.isFetching = false;
        userAPI.getUsers().then( data => {
            this.isFetching = true;
            data && this.setUsers(data);
        })
    }

    createNewUser = (data) => {
        this.isFetching = false;
        userAPI.addUser(data).then( data => {
            data && this.getUsers();
            this.isFetching = true;
        })
    }

    updateUser = user => {
        this.isFetching = false;
        userAPI.updateUser(user).then( data => {
            if(data){
                this.isFetching = true;
                data && this.getUsers();
            }
        })
    }

    deleteUser = id => {
        this.isFetching = false;
        userAPI.deleteUser(id).then( data => {
            if(data){
                this.isFetching = true;
                data && this.getDeletedUsers();
            }
        })
    }

    moveToTrash = id => {
        this.isFetching = false;
        userAPI.moveToTrash(id).then( data => {
            this.isFetching = true;
            this.getUsers();
        })
    }

    getDeletedUsers = () => {
        this.isFetching = false;
        userAPI.getDeletedUsers().then( data => {
            this.isFetching = true;
            data && this.setDeletedUsers(data);
        })
    }

    restoreUserFromRecycleBin = id => {
        this.isFetching = false;
        userAPI.restoreFromRecycleBin(id).then( data => {
            this.isFetching = true;
            data && this.getDeletedUsers();
            data && this.getUsers();
        })
    }


    getTickets = () => {
        this.isFetching = false;
        ticketAPI.getTickets().then( data => {
            this.isFetching = true;
            data && this.setTickets(data);
        })
    }

    createNewTicket = (data) => {
        this.isFetching = false;
        ticketAPI.addTicket(data).then( data => {
           this.isFetching = true;
           data && this.getTickets();
        })
    }

    updateTicket = id => {
        this.isFetching = false;
        ticketAPI.updateTicket(id).then( data => {
            this.isFetching = true;
            data && this.getTickets();
        })
    }

    deleteTicket = id => {
        this.isFetching = false;
        ticketAPI.deleteTicket(id).then( data => {
            this.isFetching = true;
            data && this.getDeletedTickets();
        })
    }

    getDeletedTickets = () => { 
        this.isFetching = false;
        ticketAPI.getDeletedTickets().then( data => {
            this.isFetching = true;
            data && this.setDeletedTickets(data);
        })
    }

    moveToTrashTicket = id => {
        this.isFetching = false;
        ticketAPI.moveToTrash(id).then( data => {
            this.isFetching = true;
            this.getDeletedTickets();
            this.getTickets();
        })
    }
    restoreTicketFromRecycleBin = id => {
        this.isFetching = false;
        ticketAPI.restoreFromRecycleBin(id).then( data => {
            this.isFetching = true;
            data && this.getDeletedUsers();
            data && this.getUsers();
        })
    }

    assignToUser = (userId, ticketId) => {
        this.isFetching = false;
        ticketAPI.assignToUser(userId,ticketId).then( data => {
            this.isFetching = true;
            data && this.getTickets();
            data && this.getUsers();
        })
    }

    unassignFromUser = id => {
        this.isFetching = false;
        ticketAPI.unassignFromUser(id).then( data => {
            this.isFetching = true;
            data && this.getTickets();
            data && this.getUsers();
        })
    }
}


export const store = new Store(); 