var BASE_URL = 'https://www.oijkl.com/xz_cp/'
var BASE_URL2 = 'https://www.oijkl.com/V2/'

export default {
	testLogin: function() {
		return BASE_URL + 'testLogin/'
	},
	usersAccount: function() {
		return BASE_URL + 'users/account/'
	},
	usersCompany: function() {
		return BASE_URL + 'users/company/'
	},
	company: function() {
		return BASE_URL + 'company/'
	},
	companyActivity: function() {
		return BASE_URL + 'company/activity/'
	},
	screenUser: function() {
		return BASE_URL + 'business/screenUser'
	},
	searchCircle: function() {
		return base_url + "searchCircle"
	},
	shop: function() {
		return BASE_URL + 'users/company'
	},
	bindingCircle: function() {
		return BASE_URL + 'bill/company2circle'
	},
	companyId: function(id) {
		return BASE_URL + 'business/companyId=' + id
	}
}
