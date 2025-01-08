//SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;

contract Upload{
struct access {
    address user;
    bool access;
}

mapping(address=>string []) value;
mapping(address=>mapping(address=>bool)) ownership;
mapping(address=>access[])accessList;
mapping(address=>mapping(address=>bool)) previousData;

function add(address _user,string calldata url)external{
value[_user].push(url);

}

function allow(address user) external{
    ownership[msg.sender][user]=true;
    if(previousData[msg.sender][user]==true){
        for(uint i=0;i<accessList[msg.sender].length;i++ ){
            if(accessList[msg.sender][i].user==user){
                accessList[msg.sender][i].access=true;
            }
        }
    }else{
    accessList[msg.sender].push(access(user,true));
    previousData[msg.sender][user]=true;

    }
}

function disallow(address user) external{
     ownership[msg.sender][user]=false;

      for(uint i=0;i<accessList[msg.sender].length;i++){
        if(accessList[msg.sender][i].user==user){
            accessList[msg.sender][i].access=false;
        }
      }
}
function display(address _user) external view returns(string[] memory){
    require(_user==msg.sender||ownership[_user][msg.sender],"you dont haev access");
    return value[_user];
}

function shareAccess() public view returns(access[] memory){
    return accessList[msg.sender];
}







}