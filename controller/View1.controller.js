sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("bdn.BDN.controller.View1", {
		onInit: function () {


		},


		onSearch: function () {

				// create some local data
				var aData = [
					{Name: "Dente", "Blood Group": "B-", Place: "PKD", Pincode: "000001", Age: "21", Weight: 50,Sex:"M"},
					{Name: "Alan", "Blood Group": "B-", Place: "TCR", Pincode: "000002", Age: "25", Weight: 60,Sex:"M"},
					{Name: "Akhil", "Blood Group": "B-", Place: "ERN", Pincode: "000003", Age: "27", Weight: 50,Sex:"M"},
					{Name: "Noel", "Blood Group": "B-", Place: "TVM", Pincode: "000004", Age: "26", Weight: 80,Sex:"M"},
					{Name: "Dipin", "Blood Group": "B-", Place: "IDK", Pincode: "000005", Age: "21", Weight: 50,Sex:"M"},
					{Name: "Jinto", "Blood Group": "B-", Place: "VKK", Pincode: "000006", Age: "26", Weight: 90,Sex:"M"},
					{Name: "Anil", "Blood Group": "B-", Place: "CRM", Pincode: "000007", Age: "21", Weight: 50,Sex:"M"},
					{Name: "Surabh", "Blood Group": "B-", Place: "KKD", Pincode: "000008", Age: "20", Weight: 50,Sex:"M"},
					{Name: "Ageesh", "Blood Group": "B-", Place: "PKD", Pincode: "000009", Age: "24", Weight: 50,Sex:"M"},
				];
	
				// create a JSONModel, fill in the data and bind the Table to this model
				var oModel = new sap.ui.model.json.JSONModel();
				var oTable = this.getView().byId("idDonorTable");

				oModel.setData(aData);
				oTable.setModel(oModel);
				//oTable.bindRows("/");
		}
	});
});