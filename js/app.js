const app = new Vue({ 
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
    email: '',
    ticketQuantity: 1,
    ticketType: 'general',
    referrals: [],
    specialRequests: '',
    purchaseAgreementSigned: false
  },
  computed: {

    // fullName func - returns formatted name
    fullName: {
      get: function() {
        if (this.firstName && this.lastName)
        {
          return this.firstName + ' ' + this.lastName;
        } else {
          return this.firstName || this.lastName;
        }
      }
    },

    // formats ticket info
    ticketDescription: function() {
      let readableTicketType = 'General Admission';
      if (this.ticketType === 'vip') {
        readableTicketType = 'VIP';
      } 
      let ticketPluralization = 'tickets';
      if (this.ticketQuantity === 1) {
        ticketPluralization = 'ticket';
      } 
       return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
    }
  }
 });