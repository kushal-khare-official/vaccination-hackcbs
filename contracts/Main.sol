// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Main {
  address owner;
  uint256 public vaccines;
  mapping(address => bool) distributors;
  event DistributorCreated(address distributor);

  modifier ownerOnly() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }
  
  modifier distributorOnly() {
    require(
      distributors[msg.sender] == true,
      "This function is restricted to the distributors only"
    );
    _;
  }
  
  constructor() {
    owner = msg.sender;
    vaccines = 0;
  }
  
  function newManufacturer(address owners) public ownerOnly {
    Distributor distributor = new Distributor(this, owners, 1);
    distributors[address(distributor)] = true;
    emit DistributorCreated(address(distributor));
  }
  
  function newWarehouse(address owners) public ownerOnly {
    Distributor distributor = new Distributor(this, owners, 2);
    distributors[address(distributor)] = true;
    emit DistributorCreated(address(distributor));
  }
  
  function newHospital(address owners) public ownerOnly {
    Distributor distributor = new Distributor(this, owners, 3);
    distributors[address(distributor)] = true;
    emit DistributorCreated(address(distributor));
  }
  
  function addVaccines(uint256 x) public distributorOnly {
      vaccines = vaccines + x;
  }
  
  function removeVaccines(uint256 x) public distributorOnly {
      vaccines = vaccines - x;
  }
}

contract Distributor {
  Main m;
  address owner;
  int public Type;
  uint256 public vaccines;
    
  modifier restricted() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }
  
  constructor(Main addr, address owners, int Types) {
      m = addr;
      owner = owners;
      Type = Types;
      vaccines = 0;
  }
  
  function addVaccines(uint256 x) public {
      require(Type == 1);
      m.addVaccines(x);
      vaccines = vaccines + x;
  }
  
  function transferVaccines(Distributor recipient, uint256 x) public restricted {
      require(Type == 1 || Type == 2);
      recipient.addVaccines(x);
      vaccines = vaccines - x;
  }
  
  function useVaccines(uint256 x) public restricted {
      require(Type == 3);
      m.removeVaccines(x);
      vaccines = vaccines - x;
  }
}