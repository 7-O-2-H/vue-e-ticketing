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
    fullName: function() {
      if (this.firstName && this.lastName)
      {
        return this.firstName + this.lastName,
      } else {
        return this.firstName || this.lastName
      }
    }
  }
 });