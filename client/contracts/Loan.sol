// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
contract Loan {
        
    enum Installment_Status {INST_1, INST_2, INST_3, INST_4,REPAY_1,REPAY_2,NFT_GENERATED}
        
    struct LoanDetails {
       string Loan_Approver_Prayas_id;
       uint256 Total_Loan_Amount;
       string[] Prayas_id_Farmers;
       uint256[] Individual_Amount;
       uint256 Interest_Rate;
       uint256 Timestamp;
       Installment_Status Status;
    }

    mapping(string=> LoanDetails[]) public Track; 


    function add_data(
       string memory _applicationId,
       string memory _Loan_Approver_Prayas_id,
       uint256 _Total_Loan_Amount,
       string[] memory _Prayas_id_Farmers,
       uint256[] memory _Individual_Amount,
       uint256 _Interest_Rate
    ) public {
        require(!_applicationIdExists(_applicationId), "Application ID already exists");
        
        LoanDetails memory Loan_Data = LoanDetails(
            _Loan_Approver_Prayas_id,
            _Total_Loan_Amount,
            _Prayas_id_Farmers,
            _Individual_Amount,
            _Interest_Rate,
            block.timestamp,
            Installment_Status.INST_1
        ); 
        Track[_applicationId].push(Loan_Data);
    }

    function updateStatus_Installment(string memory _applicationId) public returns (Installment_Status updatedStatus) {
        
        LoanDetails[] storage items = Track[_applicationId];
        
        require(items.length > 0, "No loan data found for this application ID");
        
        LoanDetails storage lastItem = items[items.length - 1];
        
        if (lastItem.Status == Installment_Status.INST_1) {
            lastItem.Status = Installment_Status.INST_2;
        } else if (lastItem.Status == Installment_Status.INST_2) {
            lastItem.Status = Installment_Status.INST_3;
        } else if (lastItem.Status == Installment_Status.INST_3) {
            lastItem.Status = Installment_Status.INST_4;
        } else if(lastItem.Status==Installment_Status.INST_4){
            lastItem.Status=Installment_Status.REPAY_1;
        }else if(lastItem.Status==Installment_Status.REPAY_1){
            lastItem.Status = Installment_Status.REPAY_2;
        }else if(lastItem.Status==Installment_Status.REPAY_2){
            lastItem.Status = Installment_Status.NFT_GENERATED;
        }
        
        updatedStatus = getCurrentStatus(_applicationId);
        
        return updatedStatus;
    }

    function getCurrentStatus(string memory _applicationId) public view returns (Installment_Status) {
        LoanDetails[] storage items = Track[_applicationId];
        require(items.length > 0, "No loan data found for this application ID");
        return items[items.length - 1].Status;
    }

    function get_data_by_id(string memory _applicationId) public view returns (LoanDetails[] memory) {
        return Track[_applicationId];
    }

    function _applicationIdExists(string memory applicationId) internal view returns (bool) {
        LoanDetails[] memory items = Track[applicationId];
        return items.length > 0;
    }


}